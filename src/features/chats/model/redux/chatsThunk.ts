import { createAsyncThunk } from '@reduxjs/toolkit';

import { IChatsQueryParams, IGetChats, getAllChats } from '../../../../../shared/api';

export const chatsThunk = createAsyncThunk<IGetChats[], IChatsQueryParams>(
    'chats/chatsThunk',
    async (chatsData: IChatsQueryParams, thunkAPI) => {
        try {
            const data = await getAllChats(chatsData);
            return data;
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
