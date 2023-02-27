import React from 'react';
import AuthForm from "./auth-form/AuthForm";
import auth from './Authorisation.module.css';

const Authorization = () => {
    return (
        <div className={auth.auth__page}>
            <AuthForm title="Вход"/>
        </div>
    );
}

export default Authorization;
