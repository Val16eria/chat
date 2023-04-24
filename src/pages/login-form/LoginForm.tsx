import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '../../components/validateData/schemaLogin';
import { FormData } from '../../components/validateData/schemaLogin';
import { postSignIn, USER_RESULT_TYPE } from '../../shared/api/auth';
import { login } from '../../shared/lib/auth';

import InputValue from '../../components/input';
import DataPage from '../../components/form-data';

const LoginForm: FC = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const loginData = await postSignIn(data);

        if (loginData.type === USER_RESULT_TYPE.SUCCESS) {
            login();
            navigate('/')
        }
        if (loginData.type === USER_RESULT_TYPE.FAILURE) {
            setError('login', { type: 'custom', message: loginData.data })
        }
    }

    return (
        <DataPage
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
        </DataPage>
    );
}

export default LoginForm;
