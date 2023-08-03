import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, FormData } from '../../../lib/schemaData';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { selectAuthUser } from '../../../../auth/auth/lib';
import { userThunk } from '../../../model/redux';

import { IUser } from '../../../../../shared/api';

import { SettingsForm } from '../settings-form';
import { InfoInput } from '../../../../../shared/ui';
import { authUserThunk } from '../../../../auth/auth';

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
        await dispatch(userThunk(data as IUser))
        .then(() => dispatch(authUserThunk()))
        .then(() => navigate('/profile'));
    }

    return (
        <SettingsForm 
            btnText='Cохранить' 
            user={user}
            onSubmit={handleSubmit(onSubmit)}
        >
            <InfoInput
                title='Почта'
                type='email'
                error={errors.email?.message ?? ''}
                {...register('email')}
            />
            <InfoInput
                title='Логин'
                type='text'
                error={errors.login?.message ?? ''}
                {...register('login')}
            />
            <InfoInput
                title='Имя'
                type='text'
                error={errors.first_name?.message ?? ''}
                {...register('first_name')}
            />
            <InfoInput
                title='Фамилия'
                type='text'
                error={errors.second_name?.message ?? ''}
                {...register('second_name')}
            />
            <InfoInput
                title='Имя в чате'
                type='text'
                error={errors.display_name?.message ?? ''}
                {...register('display_name')}
            />
            <InfoInput
                title='Телефон'
                type='tel'
                error={errors.phone?.message ?? ''}
                {...register('phone')}
            />
        </SettingsForm>
    );
};
