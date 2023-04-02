import { useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = (id: number): [string] => {

    useEffect(() => {
        console.log('connect', id)
        const socket = io(`https://ya-praktikum.tech/api/v2/chats/${id}/new`);

        socket.on('message', () => {
            console.log(1121212);
        })
    }, [])

    return ['fj'];
}

export default useSocket;
