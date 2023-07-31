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
    const isYourMessage: boolean = user?.id === data.user_id;

    return (
        <div className={`message__container ${isYourMessage && 'message__your_side'}`}>
            <div className={`flexable-column message__content ${
            isYourMessage ? 
            'message__your_color' : 
            'message__not-your_color'}`}
        >
            <p className='message__text'>{data.content}</p>
            <p className='text-small message__time'>{data.time}</p>
        </div>
        </div>
    );
}
