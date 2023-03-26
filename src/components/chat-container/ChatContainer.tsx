import React, { FC } from 'react';
import { IChat } from '../../shared/api/chat';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

interface IChatContainer {
    chatInfo?: IChat[];
}

const ChatContainer: FC<IChatContainer> = ({chatInfo}) => {
    return (
        <div className='chat-container'>
            <ChatHeader chatInfo={chatInfo}/>
            <ChatMain />
            <ChatFooter />
        </div>
    );
}

export default ChatContainer;
