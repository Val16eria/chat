import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignUp, authSignUp } from '../../../../../shared/api';

export const authSignUpThunk = createAsyncThunk<number, IAuthSignUp>(
    'authSignUp/authSignUpThunk',
    async (authSignUpData: IAuthSignUp, thunkAPI) => {
        try {
            const data = await authSignUp(authSignUpData);
            return data;
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
