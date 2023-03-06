import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InputValue from '../../components/input';
import AuthForm from '../../components/auth-form';
import { postSignIn } from '../../shared/api/apiAxios';

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

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {

        // вход
        postSignIn({
            login: data.login,
            password: data.password,
        }).then((res) => {
            if (res.status === 'success') {
                localStorage.setItem('isAuth', 'token')
                navigate('/')
                console.log('Это дата', res.data)
            }
        }).catch((err) => {console.error('Это ошибка', err)})

        // if (localStorage.getItem('isAuth') !== null) {
        //     console.log("ключ есть")
        //     navigate('/')
        // }
    }

    return (
        <AuthForm
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
        </AuthForm>
    );
}

export default LoginForm;
