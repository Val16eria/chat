import {useEffect, useState} from 'react';
import { postChatToken } from '../../shared/api/chat';
import { connectWebSocketAPI } from '../../api/webSocket';
import { getUsers } from '../../shared/api/auth';
import { TChat, TGetMessage, TSendMessage } from '../../shared/types/type-chat/chat';

const useInitData = (
    id: number,
    message2: string,
    userInfo: TChat[]):
    [TGetMessage[], TSendMessage[]] => {

    const [getMessage, setGetMessage] = useState<TGetMessage[]>([]);
    const [sendMessage, setSendMessage] = useState<TSendMessage[]>([]);

    useEffect(() => {
        const initData = async () => {
            const tokenResponse = await postChatToken('', id);
            const userId = await getUsers();

            const socket = connectWebSocketAPI(
                Object.entries(userId.data)[0].pop(),
                Number(id),
                Object.entries(tokenResponse.data)[0].pop());

            socket.addEventListener('open', () => {
                if (socket.readyState === 1) {
                    // sendMessage(message2);
                    // getMessage();
                }
                else {
                    socket.send(
                        JSON.stringify({
                            content: '0',
                            type: 'get old'
                        })
                    );
                }
            });

            const sendMessage = (message: string) => {
                socket.send(
                    JSON.stringify({
                        content: message,
                        type: 'message'
                    })
                );
            }

            const getMessage = () => {
                const chat = Array.isArray(userInfo) &&
                userInfo.find((chat) => chat.id === id);
                console.log('сообщение получено', chat)
            }

            socket?.addEventListener('message', (event) => {
                console.log('message', event.data);
                setSendMessage(event.data)
            });
        };
        initData();
    }, [id])

    console.log('getMessage', getMessage);
    console.log('sendMessage', sendMessage);
    return [getMessage, sendMessage];
}

export default useInitData;
