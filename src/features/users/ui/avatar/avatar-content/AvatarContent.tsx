import React, { FC, useState } from 'react';

import { ModalNewAvatar } from '../../window/modal-window';
import { Avatar } from '../avatar';
import { Title } from '../../../../../shared/ui';

import './AvatarContent.scss';

interface IAvatarContent {
    user_name: string;
}

export const AvatarContent: FC<IAvatarContent> = ({ user_name }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const close = () => {
        setIsModalOpen(false);
    }

    const open = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {isModalOpen && (<ModalNewAvatar close={close} />)}
            <div className='flexable-column avatar-content__container'>
                <Avatar open={open} />
                <Title title={user_name} />
            </div>
        </>
    )
};