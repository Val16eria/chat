import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import useChatPanel from '../../hooks/chat-data/useChatPanel';
import { IChatContext } from '../../shared/types/context/context';

import Panel from '../../components/panel';

import './ChatUsers.css';

export const ChatContext = React.createContext({} as IChatContext);

const ChatUsers:FC = () => {

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();

    const value:IChatContext = {
        userInfo,
        changeChatInfo,
        search,
        changeSearch
    }
    return (
        <ChatContext.Provider value={value}>
            <Panel>
                <Outlet />
            </Panel>
        </ChatContext.Provider>
    );
}

export default ChatUsers;
