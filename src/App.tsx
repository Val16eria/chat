import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginForm from './pages/login-form';
import RegForm from './pages/regist-form';
import PrivateRoute from './routing/privateRoute';
import Profile from './pages/profile';
import ProfileSettings from './pages/profile-settings';
import ProfilePassword from './pages/profile-password';
import Chat from './pages/chat';
import NoneChat from "./pages/none-chat";

const App: FC = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<NoneChat />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile-settings' element={<ProfileSettings />} />
                <Route path='/profile-password' element={<ProfilePassword />} />
                <Route path='/none-text' element={<NoneChat />} />
                <Route path='/chat/:id' element={<Chat />} />
                {/*<Route path='/modal' element={<ModalAvatar />} />*/}
            </Route>
            <Route path='/auth/login' element={<LoginForm />} />
            <Route path='/auth/reg' element={<RegForm />} />
        </Routes>
    </div>
  );
}

export default App;
