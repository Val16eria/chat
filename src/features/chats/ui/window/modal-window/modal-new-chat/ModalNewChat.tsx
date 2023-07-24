import React, { FC, HTMLAttributes } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema, FormData } from '../../../../lib/schemaNewChat';

import { FormContainer } from '../../../../../../shared/ui';

import './ModalNewChat.scss';

interface IModalChat extends HTMLAttributes<HTMLInputElement> {
    close: () => void;
}

export const ModalNewChat: FC<IModalChat> = ({close}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        // const chatData = await postChat(data);
    }

    return (
        <div className='modal-new-chat__container' onClick={close}>
            <FormContainer
                title='Название чата'
                btn='Создать'
                error={errors.title?.message ?? ''}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className='modal-new-chat__container_input'
                    type='text'
                    id='name-chat'
                    {...register('title')}
                />
            </FormContainer>
        </div>
    );
};
