export interface IGetChats {
    id: number;
    title: string;
    avatar: string;
    created_by: number;
    unread_count: 15;
    last_message: ILastMessage
}

export interface ILastMessage {
    user: IUser;
    time: string;
    content: string
}

export interface IUser {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
}

export interface IChatsQueryParams {
    offset?: number;
    limit?: number;
    title?: string;
}