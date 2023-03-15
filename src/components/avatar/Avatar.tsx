import React, { FC, useState } from 'react';
import ModalAvatar from '../modal/modal-avatar';
import AvatarImg from './AvatarImg';
import Title from '../title';

interface IAvatar {
    avatar: any;
    title?: string;
}

const Avatar: FC<IAvatar> = ({avatar, title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            {isModalOpen && (<ModalAvatar close={() => {setIsModalOpen(false)}}/>)}
            <div className='profile-avatar'>
                <AvatarImg open={() => {setIsModalOpen(true)}} avatar={avatar}/>
                <Title title={title} />
            </div>
        </>
    );
}

export default Avatar;
