export interface IId {
    id: number
}

export interface IGetChats {
    id: number;
    title: string;
    avatar: string;
    unread_count: 15;
    last_message: ILastMessage
}

export interface IChatInfo {
    id: number;
    title: number;
    avatar: string;
    created_by: number;
    unread_count: 15;
    last_message: ILastMessage
}

export interface IHistoryChat {
    id: number;
    user_id: number;
    chat_id: number;
    time: string;
    type: string;
    content: string;
    file: IFileChat | null;
}

export interface ISendChat {
    id: number;
    user_id: number;
    time: string;
    content: string;
    type: string;
}

export interface IFileChat {
    id: number;
    ser_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
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

export interface IChatDeleteResponse {
    userId: number;
    result: {
        id: number;
        title: string;
        avatar: string;
    }
}

export interface IToken {
    token: string;
}