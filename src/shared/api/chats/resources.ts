import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IChatsQueryParams, IGetChats } from './types';

export const getAllChats = async (dto: IChatsQueryParams): Promise<IGetChats[]> => {
    const response = await api.get<IGetChats[], AxiosResponse<IGetChats[]>>('/chats', {data: dto});
    return response.data;
};


