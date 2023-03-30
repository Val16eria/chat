import React from 'react';
import { TChat } from '../type-chat/chat';

export interface IContext {
    userInfo: TChat[],
    changeChatInfo: () => void,
    search: string,
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
