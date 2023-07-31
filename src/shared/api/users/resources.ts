import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';

import { IAuthUser } from '../auth';
import { IUser } from '../chats';
import { IPassword, IUserById } from './types';

export const changeUserData = async (dto: IUser): Promise<IAuthUser> => {
    const response = await api.put<IAuthUser, AxiosResponse<IAuthUser>>('/user/profile', {...dto});
    return response.data;
}

export const changeUserPassword = async (dto: IPassword): Promise<string> => {
    const response = await api.put<string, AxiosResponse<string>>('/user/password', {...dto});
    return response.data;
}

export const changeAvatar = async (dto: FormData): Promise<IAuthUser | string> => {
    const response = await api.put<IAuthUser, AxiosResponse<IAuthUser>>('/user/profile/avatar', dto, 
    {headers: {
        'Content-Type': 'multipart/form-data'
    }});
    return response.data;
}

export const userById = async (id: number): Promise<IUserById> => {
    const response = await api.get<IUserById, AxiosResponse<IUserById>>(`user/${id}`);
    return response.data;
}