export const connectWebSocketAPI = (userId: number, chatId: number, token: string) => {
    const socket = new WebSocket(
        `${process.env.REACT_APP_WS_URL}/chats/${userId}/${chatId}/${token}/`
    );
    return socket;
};

