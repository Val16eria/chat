import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IHistoryChat } from '../../../../../shared/api';
import { chatThunk } from './chatThunk';

export type TChatHistory = Record<number, IHistoryChat[]>;

interface IChatSlice {
    chat: TChatHistory;
    loading: boolean;
    error: string | null;
}

const initialState: IChatSlice = {
    chat: {},
    loading: false,
    error: null,
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        createChatFile: (state, action: PayloadAction<number>) => {
            const newChat: TChatHistory = {[action.payload]: []};
            state.chat = {...state.chat, ...newChat}
        },
        removeChatFile: (state, action: PayloadAction<number>) => {
            delete state.chat[action.payload];
        },
        setMessageFile: (state, action: PayloadAction<IHistoryChat[]>) => {
            const chatHistory = action.payload.reduce((acc, curr) => {
                acc[curr.chat_id] = action.payload;
                return acc;
            }, [] as TChatHistory);
            state.chat = {...state.chat, ...chatHistory};
        },
        addNewMessage: (state, action: PayloadAction<IHistoryChat>) => {
            if (state.chat[action.payload.chat_id]) {
                state.chat[action.payload.chat_id]?.unshift(action.payload);
            }
            else {
                const newMessage: TChatHistory = {[action.payload.chat_id]: [action.payload]};
                state.chat = {...state.chat, ...newMessage};
            }
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(chatThunk.pending, (state: IChatSlice) => {
            state.loading = true;
        });
        builder.addCase(chatThunk.fulfilled, (state: IChatSlice, action: PayloadAction<IHistoryChat[]>) => {
            state.loading = false;
            const chatHistory = action.payload.reduce((acc, curr) => {
                acc[curr.chat_id] = action.payload;
                return acc;
            }, {} as TChatHistory);
            state.chat = {...state.chat, ...chatHistory};
        });
        builder.addCase(chatThunk.rejected, (state: IChatSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const { 
    setMessageFile, 
    addNewMessage, 
    createChatFile,
    removeChatFile 
} = chatSlice.actions;
export const { reducer: chatReducer } = chatSlice;