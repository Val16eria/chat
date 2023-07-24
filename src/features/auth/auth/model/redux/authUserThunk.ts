import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthUser, authUser } from '../../../../../shared/api';

export const authUserThunk = createAsyncThunk<IAuthUser>(
    'authUser/authUserThunk',
    async (_data, thunkAPI) => {
        try {
            const data = await authUser();
            return data;
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

