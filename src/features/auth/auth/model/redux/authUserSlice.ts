import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuthUser } from '../../../../../shared/api';
import { authUserThunk } from './authUserThunk';

interface IAuthUserSlice {
    user: IAuthUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: IAuthUserSlice = {
    user: null,
    loading: false,
    error: null,
}

const authUserSlice = createSlice({
    name: 'authUser',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authUserThunk.pending, (state: IAuthUserSlice) => {
            state.loading = true;
        });
        builder.addCase(authUserThunk.fulfilled, (state: IAuthUserSlice, action: PayloadAction<IAuthUser>) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(authUserThunk.rejected, (state: IAuthUserSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { reducer: authUserReducer } = authUserSlice;
