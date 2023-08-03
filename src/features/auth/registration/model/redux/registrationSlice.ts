import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSignUpThunk } from './registrationThunk';

interface IAuthSignUpSlice {
    userId: number | null;
    loading: boolean;
    error: string | null;
}

const initialState: IAuthSignUpSlice = {
    userId: null,
    loading: false,
    error: null,
}

const authSignUpSlice = createSlice({
    name: 'authSignUp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authSignUpThunk.pending, (state: IAuthSignUpSlice) => {
            state.loading = true;
        });
        builder.addCase(authSignUpThunk.fulfilled, (state: IAuthSignUpSlice, action: PayloadAction<number>) => {
            state.loading = false;
            state.userId = action.payload;
        });
        builder.addCase(authSignUpThunk.rejected, (state: IAuthSignUpSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { reducer: authSignUpReducer } = authSignUpSlice;