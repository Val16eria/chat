import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { postSignIn, USER_RESULT_TYPE } from '../../shared/api/auth';
import { login } from '../../shared/lib/auth';

import InputValue from '../../components/input';
import DataPage from '../../components/form-data';

const schema = yup.object({
   login: yup
       .string()
       .required('Обязательное поле'),
   password: yup
       .string()
       .required('Обязательное поле')
       .min(8, 'Пароль не должен быть менее 8 символов')
       .max(15, 'Пароль не должен быть более 15 символов')
});

type FormData = yup.InferType<typeof schema>;

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
                register={{...register('login')}}
                error={errors.login?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль'
                register={{...register('password')}}
                error={errors.password?.message ?? ''}
            />
        </DataPage>
    );
}

export default LoginForm;
