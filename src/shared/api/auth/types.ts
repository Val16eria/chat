import { AxiosError } from "axios";


export interface IUser {
    avatar: string | null;
    // todo: нужно добавить null
    display_name: string;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export enum USER_RESULT_TYPE {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

type UserResultSuccess<T> = {
    type: USER_RESULT_TYPE.SUCCESS,
    data: T,
}

type UserResultFailure = {
    type: USER_RESULT_TYPE.FAILURE,
    data: string,
}

export type UserResult<T> = UserResultSuccess<T> | UserResultFailure;

export type BadResponse = AxiosError<{ reason: string }>
