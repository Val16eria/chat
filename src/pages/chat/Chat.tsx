import React, { FC } from 'react';

import Panel from '../../components/panel';
import ChatHeader from '../../components/chat-container/chat-header';
import ChatFooter from '../../components/chat-container/chat-footer';

import './Chat.css';

const Chat: FC = () => {
    return (
        <div className='chat'>
            <Panel />

            <div className='chat-container'>
                {/*<p className='none-text'>Выберите чат чтобы отправить сообщение</p>*/}
                <ChatHeader />
                <div className='chat-main'>
                    <p>Chat</p>
                </div>
                <ChatFooter />
            </div>
        </div>
    );
}

export default Chat;
