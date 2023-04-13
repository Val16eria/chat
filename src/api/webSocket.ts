const WS_URL = 'wss://ya-praktikum.tech/ws';

export const connectWebSocketAPI = (userId: number, chatId: number, token: string) => {
    const socket = new WebSocket(
        `${WS_URL}/chats/${userId}/${chatId}/${token}/`
    );
    console.log(`user ${userId} chat ${chatId} token ${token}`)
    return socket;
};

