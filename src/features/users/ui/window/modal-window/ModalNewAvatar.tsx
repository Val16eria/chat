import React, { 
    ChangeEvent,
    FC, 
    HTMLAttributes, 
    useState 
} from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../../shared/hooks';
import { authUserThunk } from '../../../../auth/auth';

import { changeAvatar } from '../../../../../shared/api/users';
import { FormContainer, Modal } from '../../../../../shared/ui';

import './ModalNewAvatar.scss';

interface IModalNewAvatar extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
}

export const ModalNewAvatar: FC<IModalNewAvatar> = ({ close }) => {

    const dispatch = useAppDispatch();
    const [ file, setFile ] = useState<File>();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async () => {
        if (!file) {
            return;
        }
        const formData = new FormData();
        formData.append('avatar', file);
        await changeAvatar(formData).then(() => dispatch(authUserThunk()))
        .then(() => close());
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    return (
        <Modal onClose={close}>
            <FormContainer
                title='Загрузите файл'
                btn='Поменять'
                error={errors.root?.message ?? ''}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label 
                    className='text-small modal-new-avatar__container_label' 
                    htmlFor='upload-photo'
                >
                    {file ? `${file.name}` : `Выберите файл`}
                </label>
                <input
                    type='file'
                    id='upload-photo'
                    accept='image/png,image/jpeg,image/gif'
                    {...register('avatar')}
                    onChange={handleOnChange}
                />
            </FormContainer>
        </Modal>
    );
};
