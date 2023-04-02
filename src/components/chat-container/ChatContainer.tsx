import React, { FC } from 'react';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

const ChatContainer: FC = () => {

    return (
        <div className='chat-container'>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </div>
    );
}

export default ChatContainer;
