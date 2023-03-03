import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = () => {
    const isAuth = !!localStorage.getItem('isAuth');

    return (
        isAuth ? <Outlet /> : <Navigate to='/auth/login' />
    );
}

export default PrivateRoute;
