import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { authSignUp } from '../../../../shared/api/auth';
import { login } from '../../../../shared/lib/auth';
import { schema, FormData } from '../lib';

import { Auth } from '../../auth';
import { InputValue } from '../../../../shared/ui/input';

export const Registration: FC = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        authSignUp(data).then(() => login());
    }

    return (
        <Auth
            title='Регистрация'
            btn='Зарегистрироваться'
            linkText='Войти'
            linkUrl='/auth/login'
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputValue
                type='email'
                lab='Почта'
                {...register('email')}
                error={errors.email?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Логин'
                {...register('login')}
                error={errors.login?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Имя'
                {...register('first_name')}
                error={errors.first_name?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Фамилия'
                {...register('second_name')}
                error={errors.second_name?.message ?? ''}
            />
            <InputValue
                type='tel'
                lab='Телефон'
                {...register('phone')}
                error={errors.phone?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль'
                {...register('password')}
                error={errors.password?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль (еще раз)'
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message ?? ''}
            />
        </Auth>
    );
};
