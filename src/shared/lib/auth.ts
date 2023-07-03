import { authLogout } from '../api';

export const login = () => {
    localStorage.setItem('isAuth', 'token');
};

export const logout = () => {
    localStorage.removeItem('isAuth');
    authLogout();
};

export const isAuth = () => !!localStorage.getItem('isAuth');
