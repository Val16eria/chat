import React, { FC } from 'react';

import { logout } from '../../../../shared/lib';
import { Link } from '../../../../shared/ui';

import './ProfileActions.scss';

export const ProfileActions: FC = () => {
    return (
        <div className='flexable-column profile-buttons'>
            <div className='profile-button'>
                <Link linkUrl='/settings' linkText='Изменить данные' />
            </div>
            <div className='profile-button'>
                <Link linkUrl='/change-password' linkText='Изменить пароль' />
            </div>
            <div className='profile-button' >
                <Link linkText='Выйти' linkUrl='/auth/login' handleClick={logout} />
            </div>
        </div>
    );
};
