import React, { FC, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import useChatPanel from '../../hooks/chat-data/useChatPanel';
import useInitData from '../../hooks/chat-token/useInitData';
import { IChatContext, IMessageContext } from '../../shared/types/context/context';

import Panel from '../../components/panel';

import './ChatUsers.css';

export const ChatContext = React.createContext({} as IChatContext);
export const MessageContext = React.createContext({} as IMessageContext);

const ChatUsers: FC = () => {

    // принимает сообщение
    const [messag, setMessag] = useState('');

    const handleSendMsg = (msg: any) => {
        console.log('это msg', msg);
        setMessag(msg);
    }

    const handleInfo = () => {
        const index = userInfo.map(i => i.id).indexOf(Number(id));
        return userInfo[index];
    }

    const { id } = useParams();

    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();
    const [getMessage, sendMessage, handleFlag] = useInitData(Number(id), userInfo, messag);

    const message:IMessageContext = {
        getMessage,
        sendMessage,
        handleFlag,
        handleSendMsg
    }

    const value:IChatContext = {
        userInfo,
        changeChatInfo,
        search,
        changeSearch,
        handleInfo // информация о пользователе при выбранном чате
    }

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
