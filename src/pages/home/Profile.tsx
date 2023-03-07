import React, { useEffect, useState } from 'react';
import { getUsers, postLogout, USER_RESULT_TYPE } from '../../shared/api/auth';
import { useNavigate } from "react-router-dom";
import { logout } from '../../shared/lib/auth';
import LinkPage from '../../components/link-page';
import Title from '../../components/title';
import ButtonBack from '../../components/buttonBack';
import AvatarImg from '../../components/avatar';
import InputInfo from '../../components/inputInfo';
import './Profile.css';

const Profile = () => {
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

    // todo: оррганизовать правильную структуру
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const handleUserInfo = async () => {
            const usersInfo = await getUsers();
            if (usersInfo.type === USER_RESULT_TYPE.SUCCESS) {
                setFirstName(usersInfo.data.first_name);
                setLogin(usersInfo.data.login);
                setEmail(usersInfo.data.email);
                setSecondName(usersInfo.data.second_name);
                setPhone(usersInfo.data.phone);
                setDisplayName(usersInfo.data.display_name);
            }
            if (usersInfo.type === USER_RESULT_TYPE.FAILURE) {
                navigate('/auth/login');
            }
        }
        handleUserInfo();
    }, []);


    return (
        <div className='profile'>
            <ButtonBack />
            <div className='profile-container'>
                <div className='profile-avatar'>
                    {/*todo: организовать выбор аватарки*/}
                    <AvatarImg />
                    <Title title={firstName} />
                </div>

                <div className='profile-info'>
                    <InputInfo title='Почта' type='email' placeholder={email} />
                    <InputInfo title='Логин' type='text' placeholder={login} />
                    <InputInfo title='Имя' type='text' placeholder={firstName} />
                    <InputInfo title='Фамилия' type='text' placeholder={secondName} />
                    <InputInfo title='Имя в чате' type='text' placeholder={displayName} />
                    <InputInfo title='Телефон' type='tel' placeholder={phone} />
                </div>

                <div className='profile-buttons'>
                    <div className='profile-button'>
                        <LinkPage linkUrl='/' linkText='Изменить данные' />
                    </div>
                    <div className='profile-button'>
                        <LinkPage linkUrl='/' linkText='Изменить пароль' />
                    </div>
                    <div className='profile-button'>
                        <LinkPage linkText='Выйти' handleBack={() => handleSubmit()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
