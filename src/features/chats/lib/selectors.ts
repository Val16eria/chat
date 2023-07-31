import { RootState } from '../../../store';

export const selectChats = (state: RootState) => state.chats.chats;
export const selectChatFiles = (state: RootState) => state.chatFiles.chat;
