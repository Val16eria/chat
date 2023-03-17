export const login = () => {
    localStorage.setItem('isAuth', 'token');
};

export const logout = () => {
    localStorage.removeItem('isAuth');
};
