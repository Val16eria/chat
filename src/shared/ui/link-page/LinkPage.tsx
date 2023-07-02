import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './LinkPage.css';

interface ILinkPage {
    linkUrl?: string;
    linkText?: string;
    handleBack?: () => void;
}

export const LinkPage: FC<ILinkPage> = ({linkUrl, linkText, handleBack}) => {
    return (
        <div className='link'>
            <NavLink onClick={handleBack} to={`${linkUrl}`}>{linkText}</NavLink>
        </div>
    );
};
