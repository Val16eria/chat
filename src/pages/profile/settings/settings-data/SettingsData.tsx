import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, FormData } from '../../../../features/users/lib/schemSettings';

import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { selectAuthUser } from '../../../../features/auth/auth/lib';
import { userThunk } from '../../../../features/users/model/redux';

import { IUser } from '../../../../shared/api';

import { SettingsForm } from '../settings-form';
import { InputInfo } from '../../../../shared/ui';

export const SettingsData: FC = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(selectAuthUser);
    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        defaultValues: {
            first_name: user?.first_name,
            second_name: user?.second_name,
            display_name: user?.display_name,
            login: user?.login,
            email: user?.email,
            phone: user?.phone,
        },
        resolver: yupResolver(schema),
        mode: 'onTouched'
    })

    const onSubmit = async (data: FormData) => {
        await dispatch(userThunk(data as IUser));
        navigate('/');
    }

    return (
        <SettingsForm 
            btnText='Cохранить' 
            user={user}
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputInfo
                title='Почта'
                type='email'
                error={errors.email?.message ?? ''}
                {...register('email')}
            />
            <InputInfo
                title='Логин'
                type='text'
                error={errors.login?.message ?? ''}
                {...register('login')}
            />
            <InputInfo
                title='Имя'
                type='text'
                error={errors.first_name?.message ?? ''}
                {...register('first_name')}
            />
            <InputInfo
                title='Фамилия'
                type='text'
                error={errors.second_name?.message ?? ''}
                {...register('second_name')}
            />
            <InputInfo
                title='Имя в чате'
                type='text'
                error={errors.display_name?.message ?? ''}
                {...register('display_name')}
            />
            <InputInfo
                title='Телефон'
                type='tel'
                error={errors.phone?.message ?? ''}
                {...register('phone')}
            />
        </SettingsForm>
    );
};
