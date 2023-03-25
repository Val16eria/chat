import { AxiosError } from 'axios';

export interface IChat {
    id: number;
    title: string;
    avatar?: string;
    created_by: number;
    unread_count: number;
    last_message?: string;
}

export interface IToken {
    token: string;
}

export enum CHAT_RESULT_TYPE {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

type ChatResultSuccess<T> = {
    type: CHAT_RESULT_TYPE.SUCCESS,
    data: T,
}

type ChatResultFailure = {
    type: CHAT_RESULT_TYPE.FAILURE,
    data: string,
}

export type ChatResult<T> = ChatResultSuccess<T> | ChatResultFailure;

export type BadResponse = AxiosError<{ reason: string }>
