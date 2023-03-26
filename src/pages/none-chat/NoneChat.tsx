import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import useChatPanel from '../../hooks/chat-data/useChatPanel';

import Panel from '../../components/panel';

import './NoneChat.css';

const NoneChat: FC = () => {

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();

    const filtered = !search
        ? userInfo
        : userInfo.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <Panel
            userInfo={filtered}
            modalChange={changeChatInfo}
            search={search}
            changeSearch={changeSearch}
        >
            <Outlet />
        </Panel>
    );
}

export default NoneChat;
