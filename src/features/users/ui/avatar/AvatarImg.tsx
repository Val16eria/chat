import React, { FC } from 'react';

import Avatar from '../../../../assets/icons/avatar.svg';
import './AvatarImg.css';

interface IAvatarImg {
    open: () => void;
    avatar?: string;
}

export const AvatarImg: FC<IAvatarImg> = ({open, avatar}) => {
    return (
        <div className='avatar-img'>
        <img 
            alt='avatar' 
            src={avatar || `${process.env.REACT_APP_BASE_URL}/${Avatar}`} 
            className='avatar-img__img' 
            id='target' 
        />
        <a className='avatar-text' onClick={() => open()}>Поменять аватарку</a>
    </div>
    );
};
