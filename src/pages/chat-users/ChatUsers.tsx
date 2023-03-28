import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import useChatPanel from '../../hooks/chat-data/useChatPanel';

import Panel from '../../components/panel';

import './ChatUsers.css';

const ChatUsers: FC = () => {

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();

    // const filtered = !search
    //     ? userInfo
    //     : userInfo.filter((item) =>
    //         item.title.toLowerCase().includes(search.toLowerCase())
    //     );

    return (
        <Panel
            userInfo={userInfo}
            modalChange={changeChatInfo}
            search={search}
            changeSearch={changeSearch}
        >
            <Outlet />
        </Panel>
    );
}

export default ChatUsers;
