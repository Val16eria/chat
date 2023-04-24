import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema } from '../../validateData/schemaModal';
import { FormData } from '../../validateData/schemaModal';
import {CHAT_RESULT_TYPE, deleteChatUsers, putAddUsers} from '../../../shared/api/chat';

import DataPage from '../../form-data';

import './ModalUser.css';

interface IModalAddUser {
    close: () => void;
    title: string;
    btn: string;
}

const ModalUser: FC<IModalAddUser> = ({close, title, btn}) => {

    const { id } = useParams();
    const chatId = Number(id)

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        if (btn === 'Добавить') {
            const chatData = await putAddUsers(data.users, chatId);

            if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
                close();
            }
            if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
                setError('users', { type: 'custom', message: chatData.data })
            }
        }
        else if (btn === 'Удалить') {
            const chatData = await deleteChatUsers(data.users, chatId);

            if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
                close();
            }
            if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
                setError('users', { type: 'custom', message: chatData.data })
            }
        }
    }

    return (
        <div className='modal-user__container' onClick={close}>
            <DataPage
                title={title}
                btn={btn}
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

export default ModalUser;
