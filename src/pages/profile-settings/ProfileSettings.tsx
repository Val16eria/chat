import React, {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { putUsers, USER_RESULT_TYPE } from '../../shared/api/users';
import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import useProfile from '../../hooks/user-data/useProfile';
import Button from '../../components/button';
import './ProfileSettings.css';

const ProfileSettings: FC = () => {
    const navigate = useNavigate();

    const [homeUserInfo, changeInfo] = useProfile();
    const [isDisabled, setIsDisables] = useState(true);

    const onSubmit = async () => {
        const regData = await putUsers(homeUserInfo);

        if (regData.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/');
        }
        if (regData.type === USER_RESULT_TYPE.FAILURE) {
            navigate('/settings');
        }
    }

    return (
        <div className='profile'>
            <ButtonBack />
            <div className='profile-container__settings'>
                <Avatar title={homeUserInfo.first_name} avatar={homeUserInfo.avatar} />
                <div className='profile-info'>
                    <InputInfo
                        title='Почта'
                        type='email'
                        value={homeUserInfo.email}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'email')}
                    />
                    <InputInfo
                        title='Логин'
                        type='text'
                        value={homeUserInfo.login}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'login')}
                    />
                    <InputInfo
                        title='Имя'
                        type='text'
                        value={homeUserInfo.first_name}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'first_name')}
                    />
                    <InputInfo
                        title='Фамилия'
                        type='text'
                        value={homeUserInfo.second_name}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'second_name')}
                    />
                    <InputInfo
                        title='Имя в чате'
                        type='text'
                        value={homeUserInfo.display_name}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'display_name')}
                    />
                    <InputInfo
                        title='Телефон'
                        type='tel'
                        value={homeUserInfo.phone}
                        disabled={isDisabled}
                        changeDisable={() => setIsDisables(!isDisabled)}
                        onChange={(e:any) => changeInfo(e.target.value, 'phone')}
                    />
                </div>
                <Button btn={'Сохранить'} onClick={() => onSubmit()}/>
            </div>
        </div>
    );
}

export default ProfileSettings;
