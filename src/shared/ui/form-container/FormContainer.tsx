import React, { FC, HTMLAttributes } from 'react';

import { Title } from '../title';
import { Button } from '../buttons/base-button';
import { LinkPage } from '../link-page';

import './FormContainer.css';

interface IFormContainer extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText?: string;
    linkUrl?: string;
    error?:  string;
}

export const FormContainer: FC<IFormContainer> = (
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
        <form className='form-container__container' {...rest} >
            <Title title={title} />
            <div className='form-container__content'>
                {rest.children}
            </div>
            <div className='form-container__actions'>
                <Button btn={btn} />
                <LinkPage linkUrl={linkUrl} linkText={linkText}/>
                <p className='error-modal'>{error}</p>
            </div>
        </form>
    );
};
