import React, { FC, HTMLAttributes } from 'react';
import Button from '../button';
import LinkPage from '../link-page';
import Title from '../title/Title';
import './AuthForm.css';

interface IAuthForm extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText: string;
    linkUrl: string;
}

const AuthForm: FC<IAuthForm> = ({ title, btn, linkText, linkUrl, ...rest }) => {
    const {children} = rest;
    return (
        <form className='auth-form' {...rest}  >
            <Title title={title} />
            <div className={'auth-form__container'}>
                {children}
            </div>
            <div className='auth-form__actions'>
                <Button btn={btn} />
                <LinkPage linkUrl={linkUrl} linkText={linkText}/>
            </div>
        </form>
    );
};

export default AuthForm;
