import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IAuthUser } from '../auth';
import { IUser } from '../chats';

export const changeUserData = async (dto: IUser): Promise<IAuthUser> => {
    const response = await api.put<IAuthUser, AxiosResponse<IAuthUser>>('/user/profile', {...dto});
    return response.data;
}