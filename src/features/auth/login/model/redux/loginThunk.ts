import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignIn, authSignIn } from '../../../../../shared/api/auth';

export const authSignInThunk = createAsyncThunk<void, IAuthSignIn>(
    'authSignIn/authSignInThunk',
    async (authSignInData: IAuthSignIn, thunkAPI) => {
        try {
            await authSignIn(authSignInData);
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
