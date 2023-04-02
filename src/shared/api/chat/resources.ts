import {
    BadResponse,
    CHAT_RESULT_TYPE,
    ChatResult,
    IEditChat,
    IChat,
    IChatUser,
    IToken
} from './types';
import { api } from '../apiAxios';

export const postChat = async (dto: {
    title: string,
}): Promise<ChatResult<IChat>> => {
    try {
        const chatData = await api.post<IChat>('/chats', {
            ...dto
        });
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const deleteChat = async (chatId: number): Promise<ChatResult<IEditChat>> => {
    try {
        const chatData = await api.delete<IEditChat>('/chats', {data: {chatId: chatId}});
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const getChat = async (dto: string): Promise<ChatResult<IChat[]>> => {
    try {
        const chatData = await api.get<IChat[]>(`/chats${dto}`);
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так'
        }
    }
}

export const postChatToken = async (token: string, id: number): Promise<ChatResult<IToken>> => {
    try {
        const chatData = await api.post<IToken>(`/chats/token/${id}`, {
            token
        });
        return {
            type:CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type:CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так'
        }
    }
}

export const putAddUsers = async (users: number, chatId: number): Promise<ChatResult<IEditChat>> => {
    try {
        const chatData = await api.put<IEditChat>('/chats/users', {
            users: [
                users
            ], chatId: chatId
        });
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const deleteChatUsers = async (users: number, chatId: number): Promise<ChatResult<IEditChat>> => {
    try {
        const chatData = await api.delete<IEditChat>('/chats/users', {data: {
            users: [
                users
            ], chatId: chatId
        }});
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const getChatUsers = async (dto: number): Promise<ChatResult<IChatUser[]>> => {
    try {
        const chatData = await api.get<IChatUser[]>(`/chats/${dto}/users`);
        return {
            type: CHAT_RESULT_TYPE.SUCCESS,
            data: chatData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: CHAT_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так'
        }
    }
}
