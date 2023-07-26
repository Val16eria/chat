import React, { FC } from 'react';

import { useUserSytem } from '../../../model/hooks';

import { Avatar } from '../avatar';
import { Title } from '../../../../../shared/ui';

import './AvatarContent.scss';

interface IAvatarContent {
    user_name: string;
}

export const AvatarContent: FC<IAvatarContent> = ({ user_name }) => {
    return (
        <div className='flexable-column avatar-content__container'>
            <Avatar />
            <Title title={user_name} />
        </div>
    )
};