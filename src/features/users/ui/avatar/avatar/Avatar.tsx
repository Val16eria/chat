import React, 
{ 
    FC, 
    useEffect, 
    useState 
} from 'react';

import { useUserSytem } from '../../../model/hooks';
import { resourcesPath } from '../../../../../shared/api/resources';

import { ModalNewAvatar } from '../../window';

import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './Avatar.scss';

export const Avatar: FC = () => {

    const [ link, setLink ] = useState<string>('');
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const { avatar } = useUserSytem();

    useEffect(() => {
        const handleAvatarImg = async () => {
            if (avatar) {
                const data = await resourcesPath(avatar);
                const url = URL.createObjectURL(data);
                setLink(url); 
            }
        }
        handleAvatarImg();
    }, [avatar])

    const close = () => {
        setIsModalOpen(false);
    }

    const open = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {isModalOpen && <ModalNewAvatar close={close} />}
            <div className='flexable-column avatar-large avatar__container'>
                <img
                    alt='avatar'
                    src={link || AvatarDefault}
                    className='avatar-style avatar__container_img'
                    id='target'
                />
                <a className='text-extra-small avatar-text' onClick={open}>
                    Поменять аватарку
                </a>
            </div>
        </>
        
    );
};
