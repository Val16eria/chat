import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';

import { useAppDispatch } from '../../../../shared/hooks';
import { authSignInThunk } from '../model/redux';

import { authUserThunk } from '../../auth';

import { login } from '../../../../shared/lib';

import { FormContainer, BaseInput } from '../../../../shared/ui';

export const Login: FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        await dispatch(authSignInThunk(data)).unwrap()
        .then(() => dispatch(authUserThunk()).unwrap())
        .then(() => login())
        .then(() => navigate('/'));
    };

    return (
        <FormContainer
            title='Войти'
            btn='Авторизоваться'
            linkText='Нет аккаунта?'
            linkUrl='/auth/reg'
            onSubmit={handleSubmit(onSubmit)}
        >
            <BaseInput
                type='text'
                lab='Логин'
                {...register('login')}
                error={errors.login?.message ?? ''}
            />
            <BaseInput
                type='password'
                lab='Пароль'
                {...register('password')}
                error={errors.password?.message ?? ''}
            />
        </FormContainer>
    );
};
