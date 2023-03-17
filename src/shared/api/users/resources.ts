import { BadResponse, IUser, USER_RESULT_TYPE, UserResult } from './types';
import { api } from '../apiAxios';

export const putAvatar = async (dto: FormData): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/profile/avatar', dto);
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const putUsers = async (dto: {
    first_name: string;
    phone: string;
    display_name?: string;
    login: string;
    email: string;
    second_name: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/profile', {
            ...dto
        });
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}

export const putPassword = async (dto: {
    oldPassword: string,
    newPassword: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/password', {
            ...dto
        });
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
        };
    }
}
