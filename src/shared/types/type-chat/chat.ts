export type TChat = {
    id: number;
    title: string;
    avatar?: string;
    created_by: number;
    unread_count: number;
    last_message?: string;
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

export type ConnectSocketDataType = {
    userId: number;
    chatId: number;
    token: string;
}
