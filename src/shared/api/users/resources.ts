import { BadResponse, IUser, USER_RESULT_TYPE, UserResult } from './types';
import { api } from '../apiAxios';

export const putAvatar = async (props: FormData): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/profile/avatar', props);
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'default',
        };
    }
}

export const putUsers = async (props: {
    first_name: string;
    phone: string;
    display_name?: string;
    login: string;
    email: string;
    second_name: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/profile', {
            ...props
        });
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'default',
        };
    }
}

export const putPassword = async (props: {
    oldPassword: string,
    newPassword: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.put<IUser>('/user/password', {
            ...props
        });
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'default',
        };
    }
}
