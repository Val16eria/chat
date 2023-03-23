import React, { FC } from 'react';
import useChatPanel from '../../hooks/chat-data/useChatPanel';

import Panel from '../../components/panel';
import ChatHeader from '../../components/chat-container/chat-header';
import ChatFooter from '../../components/chat-container/chat-footer';
import Loader from '../../components/loader';

import './Chat.css';

const Chat: FC = () => {

    const [userInfo, changeChatInfo, changeQuery, postQuery] = useChatPanel();

    console.log('это длина', userInfo)
    return (
        <>
            {userInfo.length ?
                <div className='chat'>
                    <Panel
                        chatInfo={userInfo}
                        modalChange={changeChatInfo}
                        changeQuery = {changeQuery}
                        query={postQuery}
                    />
                    <div className='chat-container'>
                        {!userInfo ?
                            <>
                                <ChatHeader />
                                <div className='chat-main'>
                                    <p>Chat</p>
                                </div>
                                <ChatFooter />
                            </>
                            : <p className='none-text'>Выберите чат чтобы отправить сообщение</p>}
                    </div>
                </div>
                : <Loader />}
        </>
    );
}

export default Chat;
