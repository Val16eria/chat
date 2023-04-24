import React, { FC, HTMLAttributes, useContext } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema } from '../../validateData/schemaNewChat';
import { FormData } from '../../validateData/schemaNewChat';
import { CHAT_RESULT_TYPE, postChat } from '../../../shared/api/chat';
import { ChatContext } from '../../../shared/types/context/contextChat';

import DataPage from '../../form-data';

import './ModalNewChat.css';

interface IModalChat extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
}

const ModalNewChat: FC<IModalChat> = ({close}) => {

    const { changeChatInfo } = useContext(ChatContext);

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const chatData = await postChat(data);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            changeChatInfo();
            close();
        }
        if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
            setError('title', { type: 'custom', message: chatData.data })
        }
    }

    return (
        <div className='modal-chat__container' onClick={close}>
            <DataPage
                title='Название чата'
                btn='Создать'
                error={errors.title?.message ?? ''}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type='text'
                    id='name-chat'
                    {...register('title')}
                />
            </DataPage>
        </div>
    );
}

export default ModalNewChat;
