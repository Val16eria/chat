import React, { FC } from 'react';
import Avatar from '../../image/avatar.svg';
import './AvatarImg.css';

interface IAvatarImg {
    open?: () => void;
    avatar?: string;
}

const AvatarImg: FC<IAvatarImg> = ({open, avatar}) => {

    return (
        <div className='avatar-img'>
            <img alt='avatar' src={avatar && Avatar} className='avatar-img__img' id='target' />
            <a className='avatar-text' onClick={open}>Поменять аватарку</a>
        </div>
    );
}

export default AvatarImg;
