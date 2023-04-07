import React from 'react';
import {TChat, TChatUsers, TGetMessage, TSendMessage} from '../type-chat/chat';

export interface IChatContext {
    userInfo: TChat[],
    changeChatInfo: () => void,
    search: string,
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleInfo: () => TChat
}

export interface IUsersCount {
    dataUsers: TChatUsers[],
    changeFlag: () => void;
}

export interface IMessageContext {
    getMessage: TGetMessage[],
    sendMessage: TSendMessage,
    handleFlag: () => void,
    handleSendMsg: (msg: any) => any
}
