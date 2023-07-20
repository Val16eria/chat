import React, { FC, useState } from 'react';

import { ModalAvatar } from '../../modal-window';
import { AvatarImg } from '../avatar-img';
import { Title } from '../../../../../shared/ui';

import './Avatar.css';

interface IAvatar {
    user_name: string;
}

export const Avatar: FC<IAvatar> = ({ user_name }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const close = () => {
        setIsModalOpen(false);
    }

    const open = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {isModalOpen && (<ModalAvatar close={close} />)}
            <div className='profile-avatar'>
                <AvatarImg open={open} />
                <Title title={user_name} />
            </div>
        </>
    )
};