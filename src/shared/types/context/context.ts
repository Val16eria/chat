import React from 'react';
import { TChat, TChatUsers } from '../type-chat/chat';

export interface IChatContext {
    userInfo: TChat[],
    changeChatInfo: () => void,
    search: string,
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IUsersCount {
    dataUsers: TChatUsers[],
    changeFlag: () => void;
}
