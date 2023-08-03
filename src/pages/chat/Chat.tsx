import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Panel } from '../../features/chats/ui';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectChats } from '../../features/chats/lib';
import { chatsThunk } from '../../features/chats/model/redux';
import { authUserThunk, selectAuthUser } from '../../features/auth/auth';
import { 
    IHistoryChat, 
    ISendChat, 
    getToken 
} from '../../shared/api';
import { addNewMessage, setMessageFile } from '../../features/chats/model/redux/history-chat/chatSlice';

export const ContextChat = React.createContext<React.MutableRefObject<{[key: number]: TChatSocket}> | null>(null);

type TChatSocket = {
    sendMessage: ((message: string) => void)
    socket: WebSocket;
}

export const Chat: FC = () => {
    const dispatch = useAppDispatch();
    const allChats = useAppSelector(selectChats);
    const user = useAppSelector(selectAuthUser);
    const socketsRef = React.useRef<{[key: number]: TChatSocket}>({});

    React.useEffect(() => {
        dispatch(chatsThunk({}));
        dispatch(authUserThunk());
    }, [])

    React.useEffect(() => {
        if (user) {
            allChats.forEach(async (chat) => {
                const { token } = await getToken(chat.id);
                const socket = new WebSocket(
                    `${process.env.REACT_APP_WS_URL}/chats/${user?.id}/${chat.id}/${token}/`
                )

                socketsRef.current[chat.id] = {
                    socket,
                    sendMessage: (message: string) => {
                        socket.send(
                            JSON.stringify({
                                content: message,
                                type: 'message'
                            })
                        );
                    }
                }

                socketsRef.current[chat.id].socket.addEventListener('open', async () => {
                    console.log('соединение установлено');
                    await getMessage('0');
                });

                socketsRef.current[chat.id].socket.addEventListener('message', (event: { data: string; }) => {
                    const data: ISendChat | IHistoryChat[] = JSON.parse(event.data);
                    console.log('data', data);
                    if (Array.isArray(data)) {
                        dispatch(setMessageFile(data));
                    }
                    else {
                        if (data.type === 'message') {
                            dispatch(addNewMessage({...data, chat_id: chat.id, file: null}));
                        }
                    }
                });
                socketsRef.current[chat.id].socket.addEventListener('close', (event: { 
                    wasClean: any; 
                    code: any; 
                    reason: any; 
                }) => {
                    if (event.wasClean) {
                        console.log('соединение закрыто чисто');
                    }
                    else {
                        console.log('соединение оборвано');
                    }
                });

                socketsRef.current[chat.id].sendMessage = (message: string) => {
                    socketsRef.current[chat.id].socket.send(
                        JSON.stringify({
                            content: message,
                            type: 'message'
                        })
                    );
                    console.log('ало блин');
                }
    
                const getMessage = (count: string) => {
                    socketsRef.current[chat.id].socket?.send(
                        JSON.stringify({
                            content: count,
                            type: 'get old',
                        })
                    );
                }
            });
        }

        return () => {
            Object.keys(socketsRef).forEach(id => {
                socketsRef.current[id as unknown as number]?.socket.close()
            })
        }
    }, [allChats.length])

    return (
        <ContextChat.Provider value={socketsRef}>
            <Panel>
                <Outlet />                                                             
            </Panel>
        </ContextChat.Provider>
    );
};
