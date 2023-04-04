import React, {FC, useContext} from 'react';
import { useParams } from 'react-router-dom';

import useChatUsers from '../../hooks/chat-users/useChatUsers';
import { IUsersCount } from '../../shared/types/context/context';

import { ChatContext } from '../../pages/chat-users/ChatUsers';
import useInitData from '../../hooks/chat-token/useInitData';

import ChatHeader from './chat-header';
import ChatFooter from './chat-footer';
import ChatMain from './chat-main';

import './ChatContainer.css';

export const UsersCountContext = React.createContext({} as IUsersCount);

const ChatContainer: FC = () => {

    const { id } = useParams();
    const { userInfo } = useContext(ChatContext);
    const [getMessage, sendMessage] = useInitData(Number(id), 'hello', userInfo);

    const [dataUsers, changeFlag] = useChatUsers(Number(id));

    const value: IUsersCount = {
        dataUsers,
        changeFlag
    }

    return (
        <div className='chat-container'>
            <UsersCountContext.Provider value={value}>
                <ChatHeader dataUsers={dataUsers}/>
                <ChatMain getMessage={getMessage} sendMessage={sendMessage}/>
                <ChatFooter />
            </UsersCountContext.Provider>
        </div>
    );
}

export default ChatContainer;
