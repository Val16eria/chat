import React, { FC, useEffect, useState } from 'react';

import { resourcesPath } from '../../../../../shared/api/resources';
import { useUserSytem } from '../../../../auth/login/model/hooks';

import Avatar from '../../../../../assets/icons/avatar.svg';
import './AvatarImg.css';

interface IAvatarImg {
    open: () => void;
}

export const AvatarImg: FC<IAvatarImg> = ({open}) => {

    const { avatar } = useUserSytem();
    const [link, setLink] = useState<string>('');

    useEffect(() => {
        const handleAvatarImg = async () => {
            const data = await resourcesPath(avatar);
            const url = URL.createObjectURL(data);
            setLink(url);
        }
        handleAvatarImg();
    }, [avatar])

    console.log('link', link);

    return (
        <div className='avatar-img'>
        <img 
            alt='avatar' 
            src={link || Avatar} 
            className='avatar-img__img' 
            id='target' 
        />
        <a className='avatar-text' onClick={open}>Поменять аватарку</a>
    </div>
    );
};
