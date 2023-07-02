import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authSignInThunk } from './loginThunk';
import { IAuthSignIn } from '../../../../../shared/api/auth';

interface IAuthSignInSlice {
    signIn: IAuthSignIn | null;
    loading: boolean;
    error: string | null;
}

const initialState: IAuthSignInSlice = {
    signIn: null,
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
        // builder.addCase(authSignInThunk.fulfilled, (state: IAuthSignInSlice, action: PayloadAction<IAuthSignIn>) => {
        //     state.loading = false;
        //     state.signIn = action.payload;
        // });
        builder.addCase(authSignInThunk.rejected, (state: IAuthSignInSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { reducer: authSignInReducer } = authSignInSlice;
