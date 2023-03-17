import {BadResponse, IUser, USER_RESULT_TYPE, UserResult} from './types';
import {api} from '../apiAxios';

export const postSignUp = async (dto: {
    password: string;
    phone: string;
    second_name: string;
    login: string;
    first_name: string;
    email: string;
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.post<IUser>('/auth/signup', {
            ...dto,
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

export const postSignIn = async (dto: {
    login: string;
    password: string
}): Promise<UserResult<IUser>> => {
    try {
        const userData = await api.post<IUser>('/auth/signin', {
            ...dto,
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
            data: error.response?.data?.reason || 'Извините, что-то пошло не так',
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
            data: error?.response?.data.reason || 'Извините, что-то пошло не так',
        };
    }
}
