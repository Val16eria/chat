import { configureStore } from '@reduxjs/toolkit';
import { authSignInReducer } from '../features/auth/login/model/redux/loginSlice';
import { authSignUpReducer } from '../features/auth/registration/model/redux/registrationSlice';
import { chatsReducer } from '../features/chats/model/redux/all-chats/chatsSlice';
import { authUserReducer } from '../features/auth/auth/model/authUserSlice';
import { chatReducer } from '../features/chats/model/redux/history-chat/chatSlice';
import { tokenReducer } from '../features/token/model/tokenSlice';

export const store = configureStore({
    reducer: {
        isAuth: authSignInReducer,
        userId: authSignUpReducer,
        chats: chatsReducer,
        chatFiles: chatReducer,
        authUser: authUserReducer,
        token: tokenReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
