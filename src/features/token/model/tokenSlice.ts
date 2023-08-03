import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITokenSlice {
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: ITokenSlice = {
    token: null,
    loading: false,
    error: null,
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		}
    }
});

export const { reducer: tokenReducer } = tokenSlice;
export const { setToken } = tokenSlice.actions;