import { useEffect } from 'react';
import { postChatToken } from '../../shared/api/chat';
import { connectWebSocketAPI } from '../../api/webSocket';
import { TChatUsers } from '../../shared/types/type-chat/chat';

const useInitData = (id: number, handleState: TChatUsers[], state: TChatUsers[]): [] => {

    // const { dataUsers } = useContext(UsersCountContext);
    // let state = dataUsers;
    //
    // const handleState = () => {
    //     return state = dataUsers;
    // }

    useEffect(() => {
        const initData = async () => {

            const tokenResponse = await postChatToken('', Number(id));

            const socket = connectWebSocketAPI(
                Number(handleState.pop()?.id),
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

    return [];
}

export default useInitData;
