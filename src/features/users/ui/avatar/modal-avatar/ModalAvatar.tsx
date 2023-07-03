import React, { FC, HTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import { putAvatar } from '../../../../../shared/api/users';

import './ModalAvatar.css';
import { Auth } from '../../../../auth/auth';

const schema = yup.object().shape({
    avatar: yup
        .string()
        .required('Нужно выбрать файл')
})

type FormData = yup.InferType<typeof schema>;

interface IModalAvatar extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
}

export const ModalAvatar: FC<IModalAvatar> = ({close}) => {

    const navigate = useNavigate();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const [image, setImage] = useState<any>();

    const onSubmit = async (data: FormData) => {
        let formData = new FormData();
        formData.append('avatar', image);
        const avaData = await putAvatar(formData);
    }

    const handleOnChange = (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div className='modal-avatar__container' onClick={close}>
            <Auth
                title='Загрузите файл'
                btn='Поменять'
                error={errors.avatar?.message ?? ''}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor='upload-photo'>
                    {
                        image ? <p style={{color: 'gray'}}>image.name</p> : 'Выбрать файл на компьютере'
                    }
                </label>
                <input
                    type='file'
                    id='upload-photo'
                    accept='image/png,image/jpeg,image/gif'
                    {...register('avatar')}
                    onChange={handleOnChange}
                />
            </Auth>
        </div>
    );
};
