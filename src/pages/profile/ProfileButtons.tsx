import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './ProfileButtons.css';
import { LinkPage } from '../../shared/ui/link-page';

export const ProfileButtons: FC = () => {

    const navigate = useNavigate();

    const handleSubmit = async () => {
        // const logoutData = await postLogout();
    }

    return (
        <div className='profile-buttons'>
            <div className='profile-button'>
                <LinkPage linkUrl='/profile-settings' linkText='Изменить данные' />
            </div>
            <div className='profile-button'>
                <LinkPage linkUrl='/profile-password' linkText='Изменить пароль' />
            </div>
            <div className='profile-button' >
                <LinkPage linkText='Выйти' handleBack={() => handleSubmit()} />
            </div>
        </div>
    );
};
