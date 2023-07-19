import React, { FC, useState } from 'react';
import { ModalAvatar } from '../modal-avatar';

import { Title } from '../../../../../shared/ui/title';
import { AvatarImg } from '../avatar-img';

import './Avatar.css';

interface IAvatar {
    title: string;
}

export const Avatar: FC<IAvatar> = ({ title }) => {

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
                <Title title={title} />
            </div>
        </>
    );
};
