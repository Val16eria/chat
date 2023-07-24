import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Link.scss';

interface ILink {
    linkUrl?: string;
    linkText?: string;
    handleClick?: () => void;
}

export const Link: FC<ILink> = ({ 
    linkUrl, 
    linkText,
    handleClick 
}) => {
    return (
        <div>
            <NavLink 
                className='text-small link' 
                onClick={handleClick} 
                to={`${linkUrl}`}
            >
                {linkText}
            </NavLink>
        </div>
    );
};
