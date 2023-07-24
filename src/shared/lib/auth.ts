import { authLogout } from '../api';

export const login = () => {
    localStorage.setItem('isAuth', 'token');
};

export const logout = () => {
    authLogout().then(() => localStorage.removeItem('isAuth'));
};

export const isAuth = () => !!localStorage.getItem('isAuth');
