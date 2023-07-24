import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { 
    IAuthSignIn, 
    IAuthSignUp, 
    IAuthUser 
} from './types';

export const authSignUp = async (dto: IAuthSignUp): Promise<number | string> => {
    const response = await api.post<number| string, AxiosResponse<number | string>>('/auth/signup', {...dto});
    return response.data;
};

export const authSignIn = async (dto: IAuthSignIn): Promise<string> => {
    const response = await api.post<string, AxiosResponse<string>>('/auth/signin', {...dto});
    return response.data;
};

export const authUser = async (): Promise<IAuthUser> => {
    const response = await api.get<IAuthUser, AxiosResponse<IAuthUser>>('/auth/user');
    return response.data;
};

export const authLogout = async (): Promise<string> => {
    const response = await api.post<string, AxiosResponse<string>>('/auth/logout');
    return response.data;
};
