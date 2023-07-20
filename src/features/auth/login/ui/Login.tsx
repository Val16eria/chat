import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema, FormData } from '../lib';

import { useAppDispatch } from '../../../../shared/hooks/useRedux';
import { authSignInThunk } from '../model/redux';

import { InputValue } from '../../../../shared/ui/input-value';
import { FormContainer } from '../../../../shared/ui/form-container';

export const Login: FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        await dispatch(authSignInThunk(data)).unwrap()
        navigate('/');
    };

    return (
        <FormContainer
            title='Войти'
            btn='Авторизоваться'
            linkText='Нет аккаунта?'
            linkUrl='/auth/reg'
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputValue
                type='text'
                lab='Логин'
                {...register('login')}
                error={errors.login?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль'
                {...register('password')}
                error={errors.password?.message ?? ''}
            />
        </FormContainer>
    );
};
