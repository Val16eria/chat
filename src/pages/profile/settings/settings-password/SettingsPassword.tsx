import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { schema, FormData } from '../../../../features/users/lib/schemaPassword';

import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { selectAuthUser } from '../../../../features/auth/auth/lib';

import { SettingsForm } from '../settings-form';
import { InputInfo } from '../../../../shared/ui/input-info';

import '../settings-data/SettingsData';

export const SettingsPassword: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(selectAuthUser);

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        // await dispatch()
        navigate('/');
    }

    return (
        <SettingsForm 
            btnText='Сохранить' 
            user={user}
            onSubmit={handleSubmit(onSubmit)}
        >
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
        </SettingsForm>
    );
};
