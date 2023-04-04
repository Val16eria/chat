import React, {FC, useContext} from 'react';
import { useParams } from 'react-router-dom';

import useInitData from '../../../hooks/chat-token/useInitData';
import { ChatContext } from '../../../pages/chat-users/ChatUsers';

import './ChatMain.css';

const ChatMain: FC = () => {

    const { id } = useParams();
    const { userInfo } = useContext(ChatContext);
    const [] = useInitData(Number(id), 'hello', userInfo);

    return (
        <div className='chat-main'>
            <div className='chat-main__date'>
                <p>19 июня</p>
            </div>
            <div className='chat-main__messages'>
                <p>Chat</p>
            </div>
        </div>
    );
}

export default ChatMain;
