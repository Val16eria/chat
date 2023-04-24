import React from 'react';
import { Route, Routes } from "react-router-dom";

import PrivateRoute from './privateRoute';
import ChatUsers from '../pages/chat-users';
import ChatContainer from '../components/chat-container';
import Profile from '../pages/profile';
import ProfileSettings from '../pages/profile-settings';
import ProfilePassword from '../pages/profile-password';
import LoginForm from '../pages/login-form';
import RegForm from '../pages/regist-form';
import NotFound from '../pages/errors/404';

const Router = () => {
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
            <Route path='/auth/login' element={<LoginForm />} />
            <Route path='/auth/reg' element={<RegForm />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;
