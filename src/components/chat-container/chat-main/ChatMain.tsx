import React, { FC } from 'react';

import './ChatMain.css';
import {TGetMessage, TSendMessage} from "../../../shared/types/type-chat/chat";
import Message from "./message";

interface IChatMain {
    getMessage: TGetMessage[],
    sendMessage: TSendMessage[]
}

const ChatMain: FC<IChatMain> = ({getMessage, sendMessage}) => {

    return (
        <>
            <div className='chat-main'>
                <div className='chat-main__date'>
                    <p>19 июня</p>
                </div>
                <Message getMessage={getMessage} sendMessage={sendMessage}/>
            </div>
        </>
    );
}

export default ChatMain;
