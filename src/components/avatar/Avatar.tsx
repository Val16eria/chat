import React, { FC, useState } from 'react';

import ModalAvatar from '../modal/modal-avatar';
import AvatarImg from './AvatarImg';
import Title from '../title';

interface IAvatar {
    avatar?: string;
    title?: string;
}

const Avatar: FC<IAvatar> = ({avatar, title}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(false);
    }

    const onOpen = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            {isModalOpen && (<ModalAvatar close={onClose} />)}
            <div className='profile-avatar'>
                <AvatarImg open={onOpen} avatar={avatar}/>
                <Title title={title} />
            </div>
        </>
    );
}

export default Avatar;
