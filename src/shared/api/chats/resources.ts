import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { 
    IChatDeleteResponse, 
    IChatsQueryParams, 
    IGetChats 
} from './types';

export const getAllChats = async (dto: IChatsQueryParams): Promise<IGetChats[]> => {
    const response = await api.get<IGetChats[], AxiosResponse<IGetChats[]>>('/chats', {data: dto});
    return response.data;
};

export const createChat = async (dto: {title: string}): Promise<string> => {
    const response = await api.post<string, AxiosResponse<string>>('/chats', {...dto});
    return response.data;
}

export const getChatFiles = async (id: string): Promise<IGetChats> => {
    const response = await api.get<IGetChats, AxiosResponse<IGetChats>>(`/chats/${id}/files`);
    return response.data;
};

export const deleteChat = async (chatId: string): Promise<IChatDeleteResponse> => {
    const response = await api.delete<IChatDeleteResponse, AxiosResponse<IChatDeleteResponse>>('/chats', {data: {chatId: chatId}});
    return response.data;
}