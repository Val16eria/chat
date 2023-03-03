import React, { FC, HTMLAttributes } from 'react';
import './AuthForm.css';
import Button from "../button";
import LinkPage from "../link-page";

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
    const {children} = rest;
    return (
        <form className='auth-form' {...rest}>
            <div className='auth-form__title'>{title}</div>
            <div className={'auth-form__container'}>
                {children}
            </div>
            <div className='auth-form__actions'>
                <Button btn={btn} />
                <LinkPage linkUrl={linkUrl} linkText={linkText}/>
                {/*<NavLink to={`${linkUrl}`}>{linkText}</NavLink>*/}
            </div>
        </form>
    );
};

export default AuthForm;
