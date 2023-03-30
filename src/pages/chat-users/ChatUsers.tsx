import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import useChatPanel from '../../hooks/chat-data/useChatPanel';
import { IContext } from '../../shared/types/context/context';

import Panel from '../../components/panel';

import './ChatUsers.css';


export const AppContext = React.createContext({} as IContext);

const ChatUsers:FC = () => {

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();

    const value:IContext = {
        userInfo,
        changeChatInfo,
        search,
        changeSearch
    }
    return (
        <AppContext.Provider value={value}>
            <Panel>
                <Outlet />
            </Panel>
        </AppContext.Provider>
    );
}

export default ChatUsers;
