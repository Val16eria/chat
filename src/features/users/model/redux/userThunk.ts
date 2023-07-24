import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthUser, IUser } from '../../../../shared/api';
import { changeUserData } from '../../../../shared/api/users';

export const userThunk = createAsyncThunk<IAuthUser, IUser>(
    'authUser/userThunk',
    async (userData: IUser, thunkAPI) => {
        try {
            const data = await changeUserData(userData);
            return data;
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
