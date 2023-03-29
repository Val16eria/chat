import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { IChat } from '../../shared/api/chat';

import Panel from '../../components/panel';

import './ChatUsers.css';


interface IChatUsers {
    userInfo: IChat[];
    modalChange: () => void;
    search: string;
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatUsers:FC<IChatUsers> = ({userInfo, modalChange, search, changeSearch}) => {

    return (
        <Panel
            userInfo={userInfo}
            modalChange={modalChange}
            search={search}
            changeSearch={changeSearch}
        >
            <Outlet />
        </Panel>
    );
}

export default ChatUsers;
