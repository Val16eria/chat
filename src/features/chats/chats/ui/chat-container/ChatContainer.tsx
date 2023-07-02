import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ChatFooter } from './chat-footer';
import { ChatHeader } from './chat-header';
import { ChatMain } from './chat-main';

import './ChatContainer.css';

export const ChatContainer: FC = () => {

    const { id } = useParams();
    // const [dataUsers, changeFlag] = useChatUsers(Number(id));

    return (
        <div className='chat-container'>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </div>
    );
};
