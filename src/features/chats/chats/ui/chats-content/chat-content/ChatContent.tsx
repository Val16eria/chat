import React, { FC } from 'react';

import { ChatHeader } from '../chat-header';
import { ChatMain } from '../chat-main';
import { ChatFooter } from '../chat-footer';

import './ChatContainer.css';

export const ChatContent: FC = () => {
    return (
        <div className='chat-content'>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </div>
    );
};
