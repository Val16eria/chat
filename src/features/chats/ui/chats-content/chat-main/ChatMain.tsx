import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../shared/hooks';
import { selectChatFiles } from '../../../lib';

import { IHistoryChat } from '../../../../../shared/api';

import { Message } from '../../message';

import './ChatMain.scss';

export const ChatMain: FC = () => {

    const { id } = useParams();
    const chats = useAppSelector(selectChatFiles);
    const chat: IHistoryChat[] = chats[Number(id)];

    return (
        <div className='flexable-column chat-main__container'>
            <div className='chat-main__date'>
                <p>{`${new Date().toLocaleDateString()}`}</p>
            </div>
            <ul className='chat-main__list'>
                {chat?.map((item) => (
                    <Message key={item.id} data={item}/>
                ))}
            </ul>
        </div>
    );
};
