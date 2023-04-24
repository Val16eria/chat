import React, { FC, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import useChatPanel from '../../hooks/chat-data/useChatPanel';
import useInitData from '../../hooks/chat-token/useInitData';

import { IChatContext, IMessageContext } from '../../shared/types/context/context';
import { MessageContext } from '../../shared/types/context/contextMessage';
import { ChatContext } from '../../shared/types/context/contextChat';

import Panel from '../../components/panel';

import './ChatUsers.css';

const ChatUsers: FC = () => {

    // принимает сообщение
    const [messag, setMessag] = useState('');

    const handleSendMsg = (msg: any) => {
        setMessag(msg);
    }

    const handleInfo = () => {
        return userInfo.find(item => item.id == Number(id));
    }

    const { id } = useParams();

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();
    const [getMessage, sendMessage, handleFlag, userId] = useInitData(Number(id), userInfo, messag);

    const message:IMessageContext = {
        getMessage,
        sendMessage,
        handleFlag,
        userId,
        handleSendMsg
    }

    const value:IChatContext = {
        userInfo,
        changeChatInfo,
        search,
        changeSearch,
        handleInfo // информация о пользователе при выбранном чате
    }

    useEffect(() => {
        changeChatInfo();
    }, [])

    return (
        <ChatContext.Provider value={value}>
            <MessageContext.Provider value={message}>
                <Panel>
                    <Outlet />
                </Panel>
            </MessageContext.Provider>
        </ChatContext.Provider>
    );
}

export default ChatUsers;
