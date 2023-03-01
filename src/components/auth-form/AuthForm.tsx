import React, { FC, HTMLAttributes} from 'react';
import { NavLink } from "react-router-dom";
import './AuthForm.css';

interface IAuthForm extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText: string;
    linkUrl: string;
}

// interface IAuthForm extends PropsWithChildren {
//     title: string;
// }

const AuthForm: FC<IAuthForm> = ({ title, btn, linkText, linkUrl, ...rest }) => {
    const { children } = rest;
    return (
        <form className="auth-form" {...rest}>
            <div className="auth-form__title">{title}</div>
            <div className={'auth-form__container'}>
                {children}
            </div>
            <div className="auth-form__actions">
                <button type="submit">{btn}</button>
                <NavLink to={`${linkUrl}`}>{linkText}</NavLink>
            </div>
        </form>
    );
};

export default AuthForm;
