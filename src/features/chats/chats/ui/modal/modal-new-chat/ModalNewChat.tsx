import React, { FC, HTMLAttributes, useContext } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { CHAT_RESULT_TYPE, postChat } from '../../../../../../shared/api/chat';

import './ModalNewChat.css';
import { schema } from '../../../lib/schemaModal';
import { Auth } from '../../../../../auth/auth';

interface IModalChat extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
}

export const ModalNewChat: FC<IModalChat> = ({close}) => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        // const chatData = await postChat(data);
    }

    return (
        <div className='modal-chat__container' onClick={close}>
            <Auth
                title='Название чата'
                btn='Создать'
                // error={errors.title?.message ?? ''}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type='text'
                    id='name-chat'
                    // {...register('title')}
                />
            </Auth>
        </div>
    );
};
