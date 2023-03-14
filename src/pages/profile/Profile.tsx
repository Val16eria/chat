import React, { FC } from 'react';
import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import ProfileButtons from './ProfileButtons';
import useProfile from '../../hooks/user-data/useProfile';
import './Profile.css';

const Profile: FC = () => {
    const [homeUserInfo] = useProfile();

    return (
        <div className='profile'>
            <ButtonBack />
            <div className='profile-container'>
                <Avatar title={homeUserInfo.first_name} avatar={homeUserInfo.avatar} />
                <div className='profile-info'>
                    <InputInfo
                        title='Почта'
                        type='email'
                        value={homeUserInfo.email}
                        disabled={true}
                    />
                    <InputInfo
                        title='Логин'
                        type='text'
                        value={homeUserInfo.login}
                        disabled={true}
                    />
                    <InputInfo
                        title='Имя'
                        type='text'
                        value={homeUserInfo.first_name}
                        disabled={true}
                    />
                    <InputInfo
                        title='Фамилия'
                        type='text'
                        value={homeUserInfo.second_name}
                        disabled={true}
                    />
                    <InputInfo
                        title='Имя в чате'
                        type='text'
                        value={homeUserInfo.display_name}
                        disabled={true}
                    />
                    <InputInfo
                        title='Телефон'
                        type='tel'
                        value={homeUserInfo.phone}
                        disabled={true}
                    />
                </div>
                <ProfileButtons />
            </div>
        </div>
    );
}

export default Profile;
