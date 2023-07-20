import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignUp, authSignUp } from '../../../../../shared/api';
import { login } from '../../../../../shared/lib/auth';

export const authSignUpThunk = createAsyncThunk<number | string, IAuthSignUp>(
    'authSignUp/authSignUpThunk',
    async (authSignUpData: IAuthSignUp, thunkAPI) => {
        try {
            const data = await authSignUp(authSignUpData);
            login();
            return data;
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
