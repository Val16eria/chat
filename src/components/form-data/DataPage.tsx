import React, { FC, HTMLAttributes } from 'react';

import Button from '../button';
import LinkPage from '../link-page';
import Title from '../title/Title';

import './DataPage.css';

interface IDataForm extends HTMLAttributes<HTMLFormElement>{
    title: string;
    btn: string;
    linkText?: string;
    linkUrl?: string;
    error?:  string;
}

const DataPage: FC<IDataForm> = (
    {
        title,
        btn,
        linkText,
        linkUrl,
        error,
        ...rest
    }) => {

    const {children} = rest;

    return (
        <form className='form-data' {...rest} >
            <Title title={title} />
            <div className={'form-data__container'}>
                {children}
            </div>
            <div className='form-data__actions'>
                <Button btn={btn} />
                <LinkPage linkUrl={linkUrl} linkText={linkText}/>
                <p className='error-modal'>{error}</p>
            </div>
        </form>
    );
}

export default DataPage;
