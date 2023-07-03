import React, { FC, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import './ChatUsers.css';
import { useChatPanel } from '../../features/chats/chats/model/hooks/useChatPanel';
import { Panel } from '../../features/chats/chats/ui';

export const ChatUsers: FC = () => {

    const [messag, setMessag] = useState('');

    const handleSendMsg = (msg: any) => {
        setMessag(msg);
    }

    const handleInfo = () => {
        // return userInfo.find(item => item.id == Number(id));
    }

    const { id } = useParams();

    const [userInfo, changeChatInfo] = useChatPanel();

    useEffect(() => {
        changeChatInfo();
    }, [])

    return (
        <Panel>
            <Outlet />
        </Panel>
    );
};
