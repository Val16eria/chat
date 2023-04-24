import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import useChatUsers from '../../hooks/chat-users/useChatUsers';
import { IUsersCount } from '../../shared/types/context/context';
import { UsersCountContext } from '../../shared/types/context/contextChatContainer';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

const ChatContainer: FC = () => {

    const { id } = useParams();
    const [dataUsers, changeFlag] = useChatUsers(Number(id));

    const value: IUsersCount = {
        dataUsers,
        changeFlag
    }

    return (
        <div className='chat-container'>
            <UsersCountContext.Provider value={value}>
                <ChatHeader />
                <ChatMain />
                <ChatFooter />
            </UsersCountContext.Provider>
        </div>
    );
}

export default ChatContainer;
