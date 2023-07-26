import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema, FormData } from '../../../../lib/schemaAddUser';

import { FormContainer } from '../../../../../../shared/ui';

interface IModalChatUser {
    close: () => void;
    title: string;
    btn: string;
}

export const ModalChatUser: FC<IModalChatUser> = ({close, title, btn}) => {

    const { id } = useParams();
    const chatId = Number(id)

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
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
        <div className='modal-style' onClick={close}>
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
