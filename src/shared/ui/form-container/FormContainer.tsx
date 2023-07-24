import React, { FC, HTMLAttributes } from 'react';

import { Title } from '../title';
import { BaseButton } from '../buttons';
import { Link } from '../link';

import './FormContainer.scss';

interface IFormContainer extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText?: string;
    linkUrl?: string;
    error?:  string;
}

export const FormContainer: FC<IFormContainer> = ({
    title,
    btn,
    linkText,
    linkUrl,
    error,
    ...rest
}) => {
    return (
        <form className='flexable-column form-container__container' {...rest} >
            <Title title={title} />
            <div className='flexable-column form-container__content'>
                {rest.children}
            </div>
            <div className='flexable-column form-container__actions'>
                <BaseButton btn={btn} />
                <Link linkUrl={linkUrl} linkText={linkText} />
                <p className='error-modal'>{error}</p>
            </div>
        </form>
    );
};
