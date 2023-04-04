import { useEffect } from 'react';
import { postChatToken } from '../../shared/api/chat';
import { connectWebSocketAPI } from '../../api/webSocket';
import { getUsers } from '../../shared/api/auth';
import {TChat} from "../../shared/types/type-chat/chat";

const useInitData = (id: number, message2: string, userInfo: TChat[]): [] => {

    useEffect(() => {
        const initData = async () => {
            const tokenResponse = await postChatToken('', id);
            const userId = await getUsers();

            const socket = connectWebSocketAPI(
                Object.entries(userId.data)[0].pop(),
                Number(id),
                Object.entries(tokenResponse.data)[0].pop());

            socket.addEventListener('open', () => {
                socket.send(
                    JSON.stringify({
                        content: '0',
                        type: 'get old'
                    })
                );
                // sendMessage(message2)
                // getMessage()
            });

            const sendMessage = (message: string) => {
                console.log('сообщение отправлено')
                socket.send(
                    JSON.stringify({
                        content: message,
                        type: 'message'
                    })
                );
            }

            const getMessage = () => {
                console.log('сообщение получено')
                const chat = Array.isArray(userInfo) &&
                userInfo.find((chat) => chat.id === id);
            }

            socket?.addEventListener('message', (event) => {
                console.log('message', event.data)
            });
        };
        initData();
    }, [])

    return [];
}

export default useInitData;
