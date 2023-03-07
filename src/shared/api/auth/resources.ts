import { BadResponse, IUser, USER_RESULT_TYPE, UserResult } from './types';
import { api } from '../apiAxios';

export const postSignUp = async (props: {
    password: string;
    phone: string;
    second_name: string;
    login: string;
    first_name: string;
    email: string;
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.post<IUser>('/auth/signup', {
            ...props,
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

export const postSignIn = async (props: {
    login: string;
    password: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.post<IUser>('/auth/signin', {
            ...props,
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

export const getUsers = async (): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.get<IUser>('/auth/user');
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

export const postLogout = async (): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.post<IUser>('/auth/logout');
        return {
            type: USER_RESULT_TYPE.SUCCESS,
            data: userData.data,
        };
    } catch (e: unknown) {
        const error = e as BadResponse;
        return {
            type: USER_RESULT_TYPE.FAILURE,
            data: error?.response?.data.reason || 'default',
        };
    }
}
