import React, { ChangeEvent, FC, HTMLAttributes } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema, FormData } from '../../../../lib/schemaActionUser';

import { FormContainer } from '../../../../../../shared/ui';
import { addUserToChat, deleteUserToChat } from '../../../../../../shared/api';

interface IModalChatUser {
    close: () => void;
    title: string;
    btn: string;
}

export const ModalChatUser: FC<IModalChatUser> = ({close, title, btn}) => {

    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        if (btn === 'Добавить') {
            await addUserToChat({
                users: [data.users],
                chatId: id as string
            })
            .then(() => close());
        }
        else if (btn === 'Удалить') {
            await deleteUserToChat({
                users: [data.users],
                chatId: id as string
            })
            .then(() => close());
        }
    }

    return (
        <div className='modal-style' onClick={close}>
            <FormContainer
                title={title}
                btn={btn}
                error={errors.users?.message ?? ''}
                onSubmit={handleSubmit(onSubmit)}
                onClick={(e: any) => e.stopPropagation()}
            >
                <input
                    className='input-style-blue'
                    type='text'
                    {...register('users')}
                />
            </FormContainer>
        </div>
    );
}
