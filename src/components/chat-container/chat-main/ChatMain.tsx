import React, { FC, useContext, useEffect } from 'react';
import { UsersCountContext } from '../ChatContainer';

import { connectWebSocketAPI } from '../../../api/webSocket';
import { postChatToken } from '../../../shared/api/chat';
import { useParams } from 'react-router-dom';

import './ChatMain.css';

const ChatMain: FC = () => {

    const { id } = useParams();
    const { dataUsers } = useContext(UsersCountContext);
    let state = dataUsers;

    const handleState = () => {
        return state = dataUsers;
    }

    useEffect(() => {
        const initData = async () => {

            const tokenResponse = await postChatToken('', Number(id));

            const socket = connectWebSocketAPI(
                Number(handleState().pop()?.id),
                Number(id),
                String(Object.entries(tokenResponse.data).map(i => i.pop())));

            socket.addEventListener('open', () => {
                socket.send(
                    JSON.stringify({
                        content: '0',
                        type: 'get old'
                    })
                );
            });

            socket?.addEventListener('message', (event) => {
                console.log('message', event.data)
            });
        };
        initData();
    }, [state])

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
