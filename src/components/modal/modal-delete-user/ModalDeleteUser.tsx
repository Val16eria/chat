import React, {FC, useContext} from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import { CHAT_RESULT_TYPE, deleteChatUsers } from '../../../shared/api/chat';
import { AppContext } from '../../../pages/chat-users/ChatUsers';

import DataPage from '../../form-data';

const schema = yup.object().shape({
    users: yup
        .number()
        .required('Обязательное поле')
})

type FormData = yup.InferType<typeof schema>;

interface IModalDeleteUser {
    close: () => void;
}

const ModalDeleteUser: FC<IModalDeleteUser> = ({close}) => {

    const { id } = useParams();
    const chatId = Number(id)

    const { changeChatInfo } = useContext(AppContext);

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const chatData = await deleteChatUsers(data.users, chatId);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            changeChatInfo();
            close();
        }
        if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
            setError('users', { type: 'custom', message: chatData.data })
        }
    }

    return (
        <div className='modal-add__container' onClick={close}>
            <DataPage
                title='Удалить пользователя'
                btn='Удалить'
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

export default ModalDeleteUser;
