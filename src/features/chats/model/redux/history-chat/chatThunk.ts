import { createAsyncThunk } from '@reduxjs/toolkit';
import { IHistoryChat, getChatFiles } from '../../../../../shared/api';

export const chatThunk = createAsyncThunk<IHistoryChat[], string>(
    'chat/chatsThunk',
    async (id: string, thunkAPI) => {
        try {
            const data = await getChatFiles(id);
            return data;
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
