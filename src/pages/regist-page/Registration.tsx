import React from 'react';
import reg from './Registration.module.css';
import RegForm from "./regist_form/RegForm";

const Authorization = () => {
    return (
        <div className={reg.reg__page}>
            <RegForm title="Регистрация"/>
        </div>
    );
}

export default Authorization;
