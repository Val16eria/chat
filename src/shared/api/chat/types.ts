import { AxiosError } from 'axios';

export interface IChat {
    id: number;
    title: string;
    avatar?: string;
    created_by: number;
    unread_count: number;
    last_message?: ILastMessage;
}

export interface ILastMessage {
    user: IUserChat;
    time: string;
    content: string;
}

export interface IUserChat {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
}

export interface IToken {
    token: string;
}

export interface IEditChat {
    users: number[]
    chatId: number
}

export interface IChatUser {
    id: string;
    first_name: string;
    second_name: string;
    display_name?: string;
    login: string;
    avatar?: string;
    email: string;
    phone: string;
    role: string;
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
