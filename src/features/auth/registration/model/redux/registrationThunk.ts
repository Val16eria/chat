import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthSignUp, authSignUp } from '../../../../../shared/api';

export const authSignUpThunk = createAsyncThunk<number | string, IAuthSignUp>(
    'authSignUp/authSignUpThunk',
    async (authSignUpData: IAuthSignUp) => {
        try {
            const data = await authSignUp(authSignUpData);
        }
        catch(e: any) {
            return e;
        }
    }
);
