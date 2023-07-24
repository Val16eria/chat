import React, 
{ 
    FC, 
    useEffect, 
    useState 
} from 'react';

import { resourcesPath } from '../../../../../shared/api/resources';
import { useUserSytem } from '../../../../auth/login/model/hooks';

import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './Avatar.scss';

interface IAvatar {
    open: () => void;
}

export const Avatar: FC<IAvatar> = ({ open }) => {

    const { avatar } = useUserSytem();
    const [ link, setLink ] = useState<string>('');

    useEffect(() => {
        const handleAvatarImg = async () => {
            const data = await resourcesPath(avatar);
            const url = URL.createObjectURL(data);
            setLink(url);
        }
        handleAvatarImg();
    }, [avatar])

    return (
        <div className='flexable-column avatar__container'>
            <img
                alt='avatar'
                src={link || AvatarDefault}
                className='avatar__container_img'
                id='target'
            />
            <a className='avatar-text' onClick={open}>
                Поменять аватарку
            </a>
    </div>
    );
};
