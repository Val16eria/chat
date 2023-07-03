import React from 'react';
import { Route, Routes } from "react-router-dom";

import PrivateRoute from './privateRoute';

import { Login } from '../features/auth/login/ui';
import { Registration } from '../features/auth/registration/ui';
import { ChatContainer } from '../features/chats/chats/ui/chat-container';
import { ChatUsers } from '../pages/chat-users';
import { Profile } from '../pages/profile';
import { NotFound } from '../pages/errors/404';
import { ProfilePassword } from '../pages/profile-password';
import { ProfileSettings } from '../pages/profile-settings';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<ChatUsers />}>
                    <Route
                        path='/'
                        element={<p className='none-text'>Выберите чат чтобы начать общение</p>}
                    />
                    <Route path='/chats/:id' element={<ChatContainer />} />
                </Route>
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile-settings' element={<ProfileSettings />} />
                <Route path='/profile-password' element={<ProfilePassword />} />
            </Route>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/reg' element={<Registration />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};
