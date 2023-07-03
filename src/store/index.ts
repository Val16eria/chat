import { configureStore } from '@reduxjs/toolkit';
import { authSignInReducer } from '../features/auth/login/model/redux/loginSlice';
import { authSignUpReducer } from '../features/auth/registration/model/redux/registrationSlice';

export const store = configureStore({
    reducer: {
        signIn: authSignInReducer,
        signUp: authSignUpReducer,
        
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
