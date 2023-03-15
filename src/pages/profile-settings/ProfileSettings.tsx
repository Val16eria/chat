import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { putUsers, USER_RESULT_TYPE } from '../../shared/api/users';
import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import useProfile from '../../hooks/user-data/useProfile';
import Button from '../../components/button';
import './ProfileSettings.css';

const schema = yup.object({
    email: yup
        .string()
        .email('Неправильный формат ввода')
        .required('Обязательное поле'),
    login: yup
        .string()
        .required('Обязательное поле'),
    first_name: yup
        .string()
        .required('Обязательное поле'),
    second_name: yup
        .string()
        .required('Обязательное поле'),
    display_name: yup
        .string(),
    phone: yup
        .string()
        .required('Обязательное поле'),
});

type FormData = yup.InferType<typeof schema>;

const ProfileSettings: FC = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const [homeUserInfo, changeInfo] = useProfile();
    const [isDisabled, setIsDisables] = useState(true);

    const onSubmit = async (data: FormData) => {
        const usersData = await putUsers(data);

        if (usersData.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/');
        }
        if (usersData.type === USER_RESULT_TYPE.FAILURE) {
            setError('email', {type: 'custom', message: usersData.data})
        }
    }

    return (
        <div className='profile'>
            <ButtonBack />
            <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
                <Avatar avatar={homeUserInfo.avatar} />
                <div className='profile-info'>
                    <InputInfo
                        title='Почта'
                        type='email'
                        error={errors.email?.message ?? ''}
                        defaultValue={homeUserInfo.email}
                        register={{...register('email', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'email')
                        })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Логин'
                        type='text'
                        error={errors.login?.message ?? ''}
                        defaultValue={homeUserInfo.login}
                        register={{...register('login', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'login')
                            })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Имя'
                        type='text'
                        error={errors.first_name?.message ?? ''}
                        defaultValue={homeUserInfo.first_name}
                        register={{...register('first_name', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'first_name')
                            })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Фамилия'
                        type='text'
                        error={errors.second_name?.message ?? ''}
                        defaultValue={homeUserInfo.second_name}
                        register={{...register('second_name', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'second_name')
                            })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Имя в чате'
                        type='text'
                        error={errors.display_name?.message ?? ''}
                        defaultValue={homeUserInfo.display_name}
                        register={{...register('display_name', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'display_name')
                            })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Телефон'
                        type='tel'
                        error={errors.phone?.message ?? ''}
                        defaultValue={homeUserInfo.phone}
                        register={{...register('phone', {
                                disabled: isDisabled,
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'phone'),
                            })}}
                        changeDisable={() => setIsDisables(!isDisabled)}
                    />
                </div>
                <Button btn={'Сохранить'} />
            </form>
        </div>
    );
}

export default ProfileSettings;
