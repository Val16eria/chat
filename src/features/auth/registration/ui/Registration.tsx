import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';

import { useAppDispatch } from '../../../../shared/hooks';
import { authSignUpThunk } from '../model/redux';

import { FormContainer, BaseInput } from '../../../../shared/ui';

export const Registration: FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        await dispatch(authSignUpThunk(data));
        navigate('/');
    };

    return (
        <FormContainer
            title='Регистрация'
            btn='Зарегистрироваться'
            linkText='Войти'
            linkUrl='/auth/login'
            onSubmit={handleSubmit(onSubmit)}
        >
            <BaseInput
                type='email'
                lab='Почта'
                {...register('email')}
                error={errors.email?.message ?? ''}
            />
            <BaseInput
                type='text'
                lab='Логин'
                {...register('login')}
                error={errors.login?.message ?? ''}
            />
            <BaseInput
                type='text'
                lab='Имя'
                {...register('first_name')}
                error={errors.first_name?.message ?? ''}
            />
            <BaseInput
                type='text'
                lab='Фамилия'
                {...register('second_name')}
                error={errors.second_name?.message ?? ''}
            />
            <BaseInput
                type='tel'
                lab='Телефон'
                {...register('phone')}
                error={errors.phone?.message ?? ''}
            />
            <BaseInput
                type='password'
                lab='Пароль'
                {...register('password')}
                error={errors.password?.message ?? ''}
            />
            <BaseInput
                type='password'
                lab='Пароль (еще раз)'
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message ?? ''}
            />
        </FormContainer>
    );
};
