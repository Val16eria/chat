export type TChat = {
    id: number;
    title: string;
    avatar?: string;
    created_by: number;
    unread_count: number;
    last_message?: TLastMessage;
}

export type TLastMessage = {
    user: TUserChat;
    time: string;
    content: string;
}

export type TUserChat = {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
}

export type TChatUsers = {
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

export type TGetMessage = {
    id: number;
    user_id: number;
    chat_id: number;
    type: string;
    time: string;
    content: string;
    is_read: boolean;
    file: null;
}

export type TSendMessage = {
    content: string;
    type: string;
    time: string;
    user_id: number;
    id: number;
}
