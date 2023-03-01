import React from 'react';
import InputValue from '../../components/input';
import AuthForm from '../../components/auth-form';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './LoginForm.css';

const schema = yup.object({
   login: yup
       .string()
       .required("Обязательное поле"),
   password: yup
       .string()
       .required('Обязательное поле')
       .min(7, 'Пароль не должен быть менее 8 символов')
       .max(15, 'Пароль не должен быть более 15 символов')
});

type FormData = yup.InferType<typeof schema>;

const LoginForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <AuthForm title="Войти" btn="Авторизоваться" linkText="Нет аккаунта?" linkUrl="/reg" onSubmit={handleSubmit(onSubmit)} >
            <InputValue  type="text" lab="Логин" register={{...register('login')}} error={errors.login?.message ?? ''}/>
            <InputValue type="password" lab="Пароль" register={{...register('password')}} error={errors.password?.message ?? ''}/>
        </AuthForm>
    );
}

export default LoginForm;
