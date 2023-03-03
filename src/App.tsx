import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login-form';
import RegForm from './pages/regist-form';
import PrivateRoute from './routing/privateRoute';
import Home from './pages/home/Home';

const App: FC = () => {
  return (
    <div>
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
            </Route>
            <Route path='/auth/login' element={<LoginForm />} />
            <Route path='/auth/reg' element={<RegForm />} />
        </Routes>
    </div>
  );
}

export default App;
