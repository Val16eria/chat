import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, USER_RESULT_TYPE } from '../../shared/api/auth';
import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import ProfileButtons from './ProfileButtons';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const [homeUserInfo, setHomeUserInfo] = useState({
        firstName: '',
        email: '',
        login: '',
        secondName: '',
        phone: '',
        displayName: '',
        avatar: ''
    });

    useEffect(() => {
        const handleUserInfo = async () => {
            const usersInfo = await getUsers();

            if (usersInfo.type === USER_RESULT_TYPE.SUCCESS) {
                setHomeUserInfo((prevState) => ({
                    ...prevState,
                    firstName: usersInfo.data.first_name,
                    email: usersInfo.data.email,
                    login: usersInfo.data.login,
                    secondName: usersInfo.data.second_name,
                    phone: usersInfo.data.phone,
                    displayName: usersInfo.data.display_name,
                    avatar: usersInfo.data.avatar,
                }))
            }

            if (usersInfo.type === USER_RESULT_TYPE.FAILURE) {
                navigate('/auth/login');
            }
        };

        handleUserInfo();
    }, []);

    return (
        <div className='profile'>
            <ButtonBack />
            <div className='profile-container'>
                <Avatar title={homeUserInfo.firstName} avatar={homeUserInfo.avatar} />
                <div className='profile-info'>
                    <InputInfo
                        title='Почта'
                        type='email'
                        placeholder={homeUserInfo.email}
                        disabled={true}
                    />
                    <InputInfo
                        title='Логин'
                        type='text'
                        placeholder={homeUserInfo.login}
                        disabled={true}
                    />
                    <InputInfo
                        title='Имя'
                        type='text'
                        placeholder={homeUserInfo.firstName}
                        disabled={true}
                    />
                    <InputInfo
                        title='Фамилия'
                        type='text'
                        placeholder={homeUserInfo.secondName}
                        disabled={true}
                    />
                    <InputInfo
                        title='Имя в чате'
                        type='text'
                        placeholder={homeUserInfo.displayName}
                        disabled={true}
                    />
                    <InputInfo
                        title='Телефон'
                        type='tel'
                        placeholder={homeUserInfo.phone}
                        disabled={true}
                    />
                </div>
                <ProfileButtons />
            </div>
        </div>
    );
}

export default Profile;
