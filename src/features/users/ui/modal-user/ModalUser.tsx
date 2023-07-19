import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema } from '../../../chats/chats/lib/schemaModal';
import { FormData } from '../../../chats/chats/lib/schemaModal';

import { FormContainer } from '../../../../shared/ui';

import './ModalUser.css';

interface IModalAddUser {
    close: () => void;
    title: string;
    btn: string;
}

export const ModalUser: FC<IModalAddUser> = ({close, title, btn}) => {

    const { id } = useParams();
    const chatId = Number(id)

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        if (btn === 'Добавить') {
            // const chatData = await putAddUsers(data.users, chatId);
        }
        else if (btn === 'Удалить') {
            // const chatData = await deleteChatUsers(data.users, chatId);
        }
    }

    return (
        <div className='modal-user__container' onClick={close}>
            <FormContainer
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
            </FormContainer>
        </div>
    );
}
