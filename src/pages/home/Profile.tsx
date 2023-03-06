import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkPage from '../../components/link-page';
import Title from '../../components/title';
import ButtonBack from '../../components/buttonBack';
import AvatarImg from '../../components/avatar';
import InputInfo from '../../components/inputInfo';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.removeItem('isAuth');
        navigate('/auth/login');
    }

    // const handleUserInfo = () => {
    //     getUsers()
    //         .then((res) => {
    //             console.log('это в общем инфа о юзере', res.data)
    //         })
    //         .catch((err) => console.error('это в общем инфа об ошибках юзера', err));
    // }

    return (
        <div className='profile'>
            <ButtonBack />
            <div className='profile-container'>
                <div className='profile-avatar'>
                    <AvatarImg />
                    {/*todo: прокидывать сюда first_name */}
                    <Title title='Иван' />
                </div>

                {/*todo: вынести в отдельный компонент*/}
                <div className='profile-info'>
                    <InputInfo title='Почта' type='email' />
                    <InputInfo title='Логин' type='text' />
                    <InputInfo title='Имя' type='text' />
                    <InputInfo title='Фамилия' type='text' />
                    <InputInfo title='Имя в чате' type='text'/>
                    <InputInfo title='Телефон' type='tel'/>
                    {/*<button onClick={handleUserInfo}>Получить данные</button>*/}
                </div>

                <div className='profile-buttons'>
                    <LinkPage linkUrl='/auth/login' linkText='Изменить данные' />
                    <LinkPage linkUrl='/auth/login' linkText='Изменить изменить пароль' />
                    <LinkPage linkUrl='/auth/login' linkText='Выйти' handleBack={() => handleSubmit()} />
                </div>
            </div>
        </div>

    );
}

export default Profile;
