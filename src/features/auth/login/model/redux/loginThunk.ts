import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignIn, authSignIn } from '../../../../../shared/api/auth';

export const authSignInThunk = createAsyncThunk<string, IAuthSignIn>(
    'authSignIn/authSignInThunk',
    async (authSignInData: IAuthSignIn, thunkAPI) => {
        try {
            const data = await authSignIn(authSignInData);
            return data;
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
