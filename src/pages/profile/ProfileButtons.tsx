import React, { FC } from 'react';
import LinkPage from '../../components/link-page';
import { postLogout, USER_RESULT_TYPE } from '../../shared/api/auth';
import { logout } from '../../shared/lib/auth';
import { useNavigate } from 'react-router-dom';
import './ProfileButtons.css';

const ProfileButtons: FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const logoutData = await postLogout();

        if (logoutData.type === USER_RESULT_TYPE.SUCCESS) {
            logout();
            navigate('/auth/login')
        }
        if (logoutData.type === USER_RESULT_TYPE.FAILURE) {
            logout();
            navigate('/auth/login');
        }
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
}

export default ProfileButtons;
