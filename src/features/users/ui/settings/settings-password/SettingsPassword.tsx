import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { schema, FormData } from '../../../lib/schemaPassword';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { selectAuthUser } from '../../../../auth/auth/lib';

import { SettingsForm } from '../settings-form';
import { InfoInput } from '../../../../../shared/ui';

import '../settings-data/SettingsData';
import { changeUserPassword } from '../../../../../shared/api/users';

export const SettingsPassword: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(selectAuthUser);

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        await changeUserPassword(data)
        .then(() => navigate('/'));
    }

    return (
        <SettingsForm 
            btnText='Сохранить' 
            user={user}
            onSubmit={handleSubmit(onSubmit)}
        >
            <InfoInput
                title='Старый пароль'
                type='password'
                error={errors.oldPassword?.message ?? ''}
                {...register('oldPassword')}
            />
            <InfoInput
                title='Новый пароль'
                type='password'
                error={errors.newPassword?.message ?? ''}
                {...register('newPassword')}
            />
            <InfoInput
                title='Повторить новый пароль'
                type='password'
                error={errors.confirmPassword?.message ?? ''}
                {...register('confirmPassword')}
            />
        </SettingsForm>
    );
};
