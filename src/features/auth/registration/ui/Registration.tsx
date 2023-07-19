import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, FormData } from '../lib';

import { useAppDispatch } from '../../../../shared/hooks/useRedux';
import { authSignUpThunk } from '../model/redux';

import { InputValue } from '../../../../shared/ui/input';
import { FormContainer } from '../../../../shared/ui/form-container';

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
        </FormContainer>
    );
};
