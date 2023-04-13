import React, { FC, useContext } from 'react';

import { ChatContext } from '../../../pages/chat-users/ChatUsers';

import Message from './message';

import './ChatMain.css';

const ChatMain: FC = () => {

    const { handleInfo } = useContext(ChatContext);

    return (
        <>
            {handleInfo()?.last_message?.content === '' ? <p className='empty-chat'>Начните общение</p> :
                <div className='chat-main'>
                    <div className='chat-main__date'>
                        <p>19 июня</p>
                    </div>
                    {handleInfo()?.last_message?.content !== '' ? <Message /> : ''}
                </div>
            }
        </>
    );
}

export default ChatMain;
