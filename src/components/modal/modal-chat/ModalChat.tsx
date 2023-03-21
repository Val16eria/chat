import React, { FC, HTMLAttributes } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import { CHAT_RESULT_TYPE, postChat } from '../../../shared/api/chat';

import DataPage from '../../form-data';

import './ModalChat.css';

const schema = yup.object().shape({
    title: yup
        .string()
        .max(15, 'Название не должно быть более 30 символов')
        .required('Обязательное поле')
})

type FormData = yup.InferType<typeof schema>;

interface IModalChat extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
    modalChange: () => void;
}

const ModalChat: FC<IModalChat> = ({close, modalChange}) => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const chatData = await postChat(data);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            modalChange();
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

export default ModalChat;
