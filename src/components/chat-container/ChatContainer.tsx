import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { IChat } from '../../shared/api/chat';
import useChatUsers from '../../hooks/chat-users/useChatUsers';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

interface IChatContainer {
    userInfo: IChat[];
    modalChange: () => void;
}

const ChatContainer: FC<IChatContainer> = ({userInfo, modalChange}) => {

    const { id } = useParams();
    const [dataUsers, changeChatUser] = useChatUsers(Number(id));

    return (
        <div className='chat-container'>
            <ChatHeader
                id={id}
                userInfo={userInfo}
                modalChange={modalChange}
                dataUsers={dataUsers}
                userChange={changeChatUser}
            />
            <ChatMain />
            <ChatFooter />
        </div>
    );
}

export default ChatContainer;
