import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import { CHAT_RESULT_TYPE, putAddUsers } from '../../../../shared/api/chat';

import DataPage from '../../../form-data';

import '../ModalActionChat.css';

const schema = yup.object().shape({
    users: yup
        .number()
        .required('Обязательное поле')
})

type FormData = yup.InferType<typeof schema>;

interface IModalAddUser {
    close: () => void;
}

const ModalAddUser: FC<IModalAddUser> = ({close}) => {

    const { id } = useParams();
    const chatId = Number(id)

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const chatData = await putAddUsers(data.users, chatId);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            close();
        }
        if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
            setError('users', { type: 'custom', message: chatData.data })
        }
    }

    return (
        <div className='modal-action__container' onClick={close}>
            <DataPage
                title='Добавить пользователя'
                btn='Добавить'
                error={errors.users?.message ?? ''}
                onSubmit={handleSubmit(onSubmit)}
                onClick={e => e.stopPropagation()}
            >
                <input
                    type='text'
                    {...register('users')}
                />
            </DataPage>
        </div>
    );
}

export default ModalAddUser;