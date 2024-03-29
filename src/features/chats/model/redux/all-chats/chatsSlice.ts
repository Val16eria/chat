import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IChatInfo } from '../../../../../shared/api';
import { chatsThunk } from './chatsThunk';

interface IChatsSlice {
    chats: IChatInfo[];
    loading: boolean;
    error: string | null;
}

const initialState: IChatsSlice = {
    chats: [],
    loading: false,
    error: null,
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(chatsThunk.pending, (state: IChatsSlice) => {
            state.loading = true;
        });
        builder.addCase(chatsThunk.fulfilled, (state: IChatsSlice, action: PayloadAction<IChatInfo[]>) => {
            state.loading = false;
            state.chats = action.payload;
        });
        builder.addCase(chatsThunk.rejected, (state: IChatsSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const { reducer: chatsReducer } = chatsSlice;