import React, { FC, HTMLAttributes } from 'react';

import './Auth.css';
import { Title } from '../../../shared/ui/title';
import { Button } from '../../../shared/ui/button';
import { LinkPage } from '../../../shared/ui/link-page';

interface IAuth extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText?: string;
    linkUrl?: string;
    error?:  string;
}

export const Auth: FC<IAuth> = (
    {
        title,
        btn,
        linkText,
        linkUrl,
        error,
        ...rest
    }
) => {
    return (
        <form className='auth__container' {...rest} >
            <Title title={title} />
            <div className={'auth__content'}>
                {rest.children}
            </div>
            <div className='auth__actions'>
                <Button btn={btn} />
                <LinkPage linkUrl={linkUrl} linkText={linkText}/>
                <p className='error-modal'>{error}</p>
            </div>
        </form>
    );
};
