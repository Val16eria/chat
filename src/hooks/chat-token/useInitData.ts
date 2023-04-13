import { useEffect, useState } from 'react';
import { postChatToken } from '../../shared/api/chat';
import { connectWebSocketAPI } from '../../api/webSocket';
import { getUsers } from '../../shared/api/auth';
import { TChat, TGetMessage, TSendMessage } from '../../shared/types/type-chat/chat';

const useInitData = (
    id: number,
    userInfo: TChat[],
    message2: string ):
    [TGetMessage[], TSendMessage, (() => void), number] => {

    const [getMessage, setGetMessage] = useState<TGetMessage[]>([]);
    const [sendMessage, setSendMessage] = useState<TSendMessage>({} as TSendMessage);

    const [isFlag, setFlag] = useState<boolean>(false);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const initData = async () => {
            const tokenResponse = await postChatToken('', id);
            const userId = await getUsers();

            setUserId(Object.entries(userId.data)[0].pop());

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
                sendMessage(message2);
                getMessage();
            });

            const sendMessage = (message: string) => {
                socket.send(
                    JSON.stringify({
                        content: message,
                        type: 'message'
                    })
                );
                console.log('сообщение отправлено')
            }

            const getMessage = () => {
                const chat = Array.isArray(userInfo) &&
                userInfo.find((chat) => chat.id === id);
                console.log('сообщение получено');
            }

            socket?.addEventListener('message', (event) => {
                const value = Array(JSON.parse(event.data))[0];

                if (Array.isArray(value))
                    setGetMessage(value);
                else
                    setSendMessage(value)
            });
        };
        initData();
    }, [isFlag])


    const handleFlag = () => {
        setFlag(prevState => !prevState);
    }

    return [getMessage, sendMessage, handleFlag, userId];
}

export default useInitData;
