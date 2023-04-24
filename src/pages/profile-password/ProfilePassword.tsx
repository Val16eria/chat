import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useProfile from '../../hooks/user-data/useProfile';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema } from '../../components/validateData/schemaPassword';
import { FormData } from '../../components/validateData/schemaPassword';
import { putPassword, USER_RESULT_TYPE } from '../../shared/api/users';

import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button';
import Loader from '../../components/loader';

import '../profile-settings/ProfileSettings.css';

const ProfilePassword: FC = () => {

    const navigate = useNavigate();

    const [homeUserInfo] = useProfile();

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const usersPassword = await putPassword(data);

        if (usersPassword.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/profile');
        }
        if (usersPassword.type === USER_RESULT_TYPE.FAILURE) {
            setError('oldPassword', {type: 'custom', message: usersPassword.data})
        }
    }

    return (
        <div className='profile'>
            <ButtonBack />
            {
                homeUserInfo.email ?
                    <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
                        <Avatar avatar={homeUserInfo.avatar} />
                        <div className='profile-info'>
                            <InputInfo
                                title='Старый пароль'
                                type='password'
                                error={errors.oldPassword?.message ?? ''}
                                {...register('oldPassword')}
                            />
                            <InputInfo
                                title='Новый пароль'
                                type='password'
                                error={errors.newPassword?.message ?? ''}
                                {...register('newPassword')}
                            />
                            <InputInfo
                                title='Повторить новый пароль'
                                type='password'
                                error={errors.confirmPassword?.message ?? ''}
                                {...register('confirmPassword')}
                            />
                        </div>
                        <Button btn={'Сохранить'} />
                    </form>
                    : <Loader />
            }
        </div>
    );
}

export default ProfilePassword;
