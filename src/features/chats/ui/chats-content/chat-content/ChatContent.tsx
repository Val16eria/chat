import React, { FC } from 'react';

import { ChatHeader } from '../chat-header';
import { ChatMain } from '../chat-main';
import { ChatFooter } from '../chat-footer';

import './ChatContent.scss';

export const ChatContent: FC = () => {
    return (
        <div className='chat-content__container'>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </div>
    );
};
