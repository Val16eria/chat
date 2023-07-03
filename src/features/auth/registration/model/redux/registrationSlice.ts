import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthSignUp } from '../../../../../shared/api';
import { authSignUpThunk } from './registrationThunk';

interface IAuthSignUpSlice {
    signUp: IAuthSignUp | null;
    loading: boolean;
    error: string | null;
}

const initialState: IAuthSignUpSlice = {
    signUp: null,
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
        // builder.addCase(authSignUpThunk.fulfilled, (state: IAuthSignUpSlice, action: PayloadAction<IAuthSignUp>) => {
        //     state.loading = false;
        //     state.signUp = action.payload;
        // });
        builder.addCase(authSignUpThunk.rejected, (state: IAuthSignUpSlice, action: PayloadAction<any>) => {
            state.loading = false;
            state.signUp = action.payload;
        });
    }
});

export const { reducer: authSignUpReducer } = authSignUpSlice;