import React, { FC } from 'react';

import { useAppSelector } from '../../../../shared/hooks';
import { selectAuthUser } from '../../../auth/auth';

import { IHistoryChat } from '../../../../shared/api';

import './Message.scss';

interface IMessage {
    data: IHistoryChat;
}

export const Message: FC<IMessage> = ({ data }) => {

    const user = useAppSelector(selectAuthUser);

    return (
        <div className={`flexable-column message__container ${
            user?.id === data.user_id ? 
            'message__your_text' : 
            'message__not-your_text'}`}
        >
            <p className='message__text'>{data.content}</p>
            <p className='text-small message__time'>{data.time}</p>
        </div>
    );
}
