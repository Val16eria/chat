import React, { FC, useContext } from 'react';

import { ChatContext } from '../../../shared/types/context/contextChat';
import Message from './message';

import './ChatMain.css';

const ChatMain: FC = () => {

    const { handleInfo } = useContext(ChatContext);
    const content = handleInfo()?.last_message?.content !== '' ? <Message /> : '';

    return (
        <>
            {handleInfo()?.last_message?.content === '' ? <p className='empty-chat'>Начните общение</p> :
                <div className='chat-main'>
                    <div className='chat-main__date'>
                        <p>19 июня</p>
                    </div>
                    {content}
                </div>
            }
        </>
    );
}

export default ChatMain;
