import { configureStore } from '@reduxjs/toolkit';
import { authSignInReducer } from '../features/auth/login/model/redux/loginSlice';
import { authSignUpReducer } from '../features/auth/registration/model/redux/registrationSlice';
import { chatsReducer } from '../features/chats/chats/model/redux/chatsSlice';

export const store = configureStore({
    reducer: {
        isAuth: authSignInReducer,
        userId: authSignUpReducer,
        chats: chatsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
