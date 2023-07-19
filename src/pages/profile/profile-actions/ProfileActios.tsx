import React, { FC } from 'react';

import { logout } from '../../../shared/lib';
import { LinkPage } from '../../../shared/ui';

import './ProfileActions.css';

export const ProfileActions: FC = () => {

    return (
        <div className='profile-buttons'>
            <div className='profile-button'>
                <LinkPage linkUrl='/profile-settings' linkText='Изменить данные' />
            </div>
            <div className='profile-button'>
                <LinkPage linkUrl='/profile-password' linkText='Изменить пароль' />
            </div>
            <div className='profile-button' >
                <LinkPage linkText='Выйти' linkUrl='/auth/login' handleBack={logout} />
            </div>
        </div>
    );
};
