import { createAsyncThunk } from '@reduxjs/toolkit';

import { 
    IChatsQueryParams, 
    getAllChats, 
    IChatInfo
} from '../../../../../shared/api';


export const chatsThunk = createAsyncThunk<IChatInfo[], IChatsQueryParams>(
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
