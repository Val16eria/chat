import React, { FC } from 'react';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';
import {IUsersCount} from "../../shared/types/context/context";
import useChatUsers from "../../hooks/chat-users/useChatUsers";
import {useParams} from "react-router-dom";

export const UsersCountContext = React.createContext({} as IUsersCount);

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
