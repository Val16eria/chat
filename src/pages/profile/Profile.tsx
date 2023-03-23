import React, { FC } from 'react';

import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import ProfileButtons from './ProfileButtons';
import useProfile from '../../hooks/user-data/useProfile';

import Loader from '../../components/loader';
import './Profile.css';

const Profile: FC = () => {

    const [homeUserInfo] = useProfile();

    return (
        <div className='profile'>
            <ButtonBack />
            {
                homeUserInfo.email ?
                    <div className='profile-container'>
                        <Avatar title={homeUserInfo.first_name} avatar={homeUserInfo.avatar} />
                        <div className='profile-info'>
                            <InputInfo
                                title='Почта'
                                type='email'
                                defaultValue={homeUserInfo.email}
                                disabled={true}
                            />
                            <InputInfo
                                title='Логин'
                                type='text'
                                defaultValue={homeUserInfo.login}
                                disabled={true}
                            />
                            <InputInfo
                                title='Имя'
                                type='text'
                                defaultValue={homeUserInfo.first_name}
                                disabled={true}
                            />
                            <InputInfo
                                title='Фамилия'
                                type='text'
                                defaultValue={homeUserInfo.second_name}
                                disabled={true}
                            />
                            <InputInfo
                                title='Имя в чате'
                                type='text'
                                defaultValue={homeUserInfo.display_name}
                                disabled={true}
                            />
                            <InputInfo
                                title='Телефон'
                                type='tel'
                                defaultValue={homeUserInfo.phone}
                                disabled={true}
                            />
                        </div>
                        <ProfileButtons />
                    </div>
                    : <Loader/>
            }
        </div>
    );
}

export default Profile;