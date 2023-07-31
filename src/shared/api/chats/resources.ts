import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { 
    IChatDeleteResponse, 
    IChatInfo, 
    IChatsQueryParams, 
    IHistoryChat,
    IToken
} from './types';

export const getAllChats = async (dto: IChatsQueryParams): Promise<IChatInfo[]> => {
    const response = await api.get<IChatInfo[], AxiosResponse<IChatInfo[]>>('/chats', {data: dto});
    return response.data;
};

export const createChat = async (dto: {title: string}): Promise<string> => {
    const response = await api.post<string, AxiosResponse<string>>('/chats', {...dto});
    return response.data;
}

export const getChatFiles = async (id: string): Promise<IHistoryChat[]> => {
    const response = await api.get<IHistoryChat[], AxiosResponse<IHistoryChat[]>>(`/chats/${id}/files`);
    return response.data;
};

export const deleteChat = async (chatId: string): Promise<IChatDeleteResponse> => {
    const response = await api.delete<IChatDeleteResponse, AxiosResponse<IChatDeleteResponse>>('/chats', {data: {chatId: chatId}});
    return response.data;
}

export const addChatAvatar = async (dto: {
    chatId: string, 
    avatar: FormData
}): Promise<IChatInfo> => {
    const response = await api.put<IChatInfo, AxiosResponse<IChatInfo>>('chats/avatar', {...dto});
    return response.data;
}

export const addUserToChat = async (dto: {
    users: number[],
    chatId: string
}): Promise<string> => {
    const response = await api.put<string, AxiosResponse<string>>('/chats/users', {...dto});
    return response.data;
}

export const deleteUserToChat = async (dto: {
    users: number[],
    chatId: string
}): Promise<string> => {
    const response = await api.delete<string, AxiosResponse<string>>('/chats/users', {data: dto});
    return response.data;
}

export const getToken = async (id: number | string): Promise<IToken> => {
    const response = await api.post<IToken, AxiosResponse<IToken>>(`/chats/token/${id}`);
    return response.data;
}
