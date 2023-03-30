import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import useChatUsers from '../../hooks/chat-users/useChatUsers';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

const ChatContainer: FC = () => {

    const { id } = useParams();
    const [dataUsers] = useChatUsers(Number(id));

    return (
        <div className='chat-container'>
            <ChatHeader id={id} dataUsers={dataUsers}/>
            <ChatMain />
            <ChatFooter />
        </div>
    );
}

export default ChatContainer;
