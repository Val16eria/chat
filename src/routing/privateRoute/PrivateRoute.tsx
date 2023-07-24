import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

import { isAuth } from '../../shared/lib/auth';

const PrivateRoute: React.FC<RouteProps> = () => {
    return (
        isAuth() ? <Outlet /> : <Navigate to='/auth/login' />
    );
}

export default PrivateRoute;
