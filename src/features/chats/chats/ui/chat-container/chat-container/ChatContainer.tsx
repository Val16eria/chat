import React, { FC } from 'react';

import { ChatHeader } from '../chat-header';
import { ChatMain } from '../chat-main';
import { ChatFooter } from '../chat-footer';

import './ChatContainer.css';

export const ChatContainer: FC = () => {
    return (
        <div className='chat-container'>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </div>
    );
};
