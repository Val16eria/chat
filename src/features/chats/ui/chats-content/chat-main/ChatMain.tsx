import React, { FC, RefObject, useEffect, useRef } from 'react';
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

    const divRef:RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        divRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat?.length])

    return (
        <div className='chat-main__container'>
            <ul className='chat-main__list'>
                {chat?.map((item) => (
                    <Message key={item.id} data={item}/>
                ))}
            </ul>
            <div ref={divRef}/>
        </div>
    );
};
