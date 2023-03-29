import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import useChatPanel from './hooks/chat-data/useChatPanel';

import LoginForm from './pages/login-form';
import RegForm from './pages/regist-form';
import PrivateRoute from './routing/privateRoute';
import Profile from './pages/profile';
import ProfileSettings from './pages/profile-settings';
import ProfilePassword from './pages/profile-password';
import ChatUsers from './pages/chat-users';
import ChatContainer from './components/chat-container';

const App: FC = () => {
    // тут информация о чатах
    const [userInfo, changeChatInfo, search, changeSearch] = useChatPanel();

    return (
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoute />}>
                    <Route
                        path='/'
                        element={<ChatUsers
                            userInfo={userInfo}
                            modalChange={changeChatInfo}
                            search={search}
                            changeSearch={changeSearch}/>}>
                        <Route
                            path='/'
                            element={<p className='none-text'>Выберите чат чтобы начать общение</p>}/>
                        <Route
                            path='/chat/:id'
                            element={<ChatContainer
                                userInfo={userInfo}
                                modalChange={changeChatInfo}/>}/>
                    </Route>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profile-settings' element={<ProfileSettings />} />
                    <Route path='/profile-password' element={<ProfilePassword />} />
                </Route>
                <Route path='/auth/login' element={<LoginForm />} />
                <Route path='/auth/reg' element={<RegForm />} />
            </Routes>
        </div>
  );
}

export default App;
