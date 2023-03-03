import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import './LinkPage.css';

interface ILinkPage {
    linkUrl: string;
    linkText: string;
}

const LinkPage: FC<ILinkPage> = ({ linkUrl, linkText }) => {
    return (
        <div className="link">
            <NavLink to={`${linkUrl}`}>{linkText}</NavLink>
        </div>
    );
}

export default LinkPage;
