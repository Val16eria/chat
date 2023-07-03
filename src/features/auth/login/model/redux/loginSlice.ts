import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSignInThunk } from './loginThunk';

interface IAuthSignInSlice {
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: IAuthSignInSlice = {
    isAuth: false,
    loading: false,
    error: null,
}

const authSignInSlice = createSlice({
    name: 'authSignIn',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authSignInThunk.pending, (state: IAuthSignInSlice) => {
            state.loading = true;
        });
        builder.addCase(authSignInThunk.fulfilled, (state: IAuthSignInSlice) => {
            state.loading = false;
            state.isAuth = true;
        });
        builder.addCase(authSignInThunk.rejected, (state: IAuthSignInSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { reducer: authSignInReducer } = authSignInSlice;
