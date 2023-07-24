import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignIn, authSignIn } from '../../../../../shared/api/auth';
import { login } from '../../../../../shared/lib/auth';

export const authSignInThunk = createAsyncThunk<void, IAuthSignIn>(
    'authSignIn/authSignInThunk',
    async (authSignInData: IAuthSignIn, thunkAPI) => {
        try {
            await authSignIn(authSignInData).then(() => login());
        }
        catch(e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
