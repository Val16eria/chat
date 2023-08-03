import React, 
{ 
    FC, 
    useEffect, 
    useState 
} from 'react';

import { selectAuthUser } from '../../../../auth/auth';
import { useAppSelector } from '../../../../../shared/hooks';

import { resourcesPath } from '../../../../../shared/api/resources';

import { ModalNewAvatar } from '../../window';

import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './Avatar.scss';
import { Loader } from '../../../../../shared/ui';

export const Avatar: FC = () => {

    const user = useAppSelector(selectAuthUser);
    const [ link, setLink ] = useState<string>('');
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect(() => {
        const handleAvatarImg = async () => {
            if (user?.avatar) {
                const data = await resourcesPath(user.avatar);
                const url = URL.createObjectURL(data);
                setLink(url); 
            }
        }
        handleAvatarImg();
    }, [user?.avatar])

    const close = () => {
        setIsModalOpen(false);
    }

    const open = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {!user ? 
                <Loader /> :
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
            }
        </>
        
    );
};
