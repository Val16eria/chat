import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schema } from '../../features/users/lbi/schemaPassword';
import { FormData } from '../../features/users/lbi/schemaPassword';
import { putPassword, USER_RESULT_TYPE } from '../../shared/api/users';

import Avatar from '../../features/users/ui/avatar/Avatar';

import '../profile-settings/ProfileSettings.css';
import { Button } from '@mui/material';
import { ButtonBack } from '../../shared/ui/buttonBack';
import { InputInfo } from '../../shared/ui/inputInfo';

export const ProfilePassword: FC = () => {

    const navigate = useNavigate();

    // const [homeUserInfo] = useProfile(); 

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const usersPassword = await putPassword(data);
    }

    return (
        <div className='profile'>
            <ButtonBack />
            {
                // homeUserInfo.email ?
                    <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
                        {/* <Avatar avatar={homeUserInfo.avatar} /> */}
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
                        {/* <Button btn={'Сохранить'} /> */}
                    </form>
                    // : <Loader />
            }
        </div>
    );
};
