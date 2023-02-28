import React from 'react';
import InputValue from '../../components/input/InputValue';
import AuthForm from '../../components/auth-form/AuthForm';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './RegForm.css';

const schema = yup.object({
    email: yup
        .string()
        .email("Неправильный формат ввода")
        .required("Обязательное поле"),
    login: yup
        .string()
        .required("Обязательное поле"),
    firstName: yup
        .string()
        .required("Обязательное поле"),
    lastName: yup
        .string()
        .required("Обязательное поле"),
    phone: yup
        .number()
        .typeError("Номер должен быть целым числом")
        .positive("Номер не может содержать отрицательные цисла")
        .required("Обязательное поле"),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    confirmPassword: yup
        .string()
        .required("Обязательное поле")
        .oneOf([yup.ref('password'), ''], "Пароли не совпадают")
});

type FormData = yup.InferType<typeof schema>;

const RegForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <AuthForm title="Регистрация" btn="Зарегистрироваться" linkText="Войти" linkUrl="" onSubmit={handleSubmit(onSubmit)}>
            <InputValue type="email" lab="Почта"
                        register={{...register('email')}}
                        error={errors.email?.message ?? ''}
            />
            <InputValue type="text" lab="Логин"
                        register={{...register('login')}}
                        error={errors.login?.message ?? ''}
            />
            <InputValue type="text" lab="Имя"
                        register={{...register('firstName')}}
                        error={errors.firstName?.message ?? ''}
            />
            <InputValue type="text" lab="Фамилия"
                        register={{...register('lastName')}}
                        error={errors.lastName?.message ?? ''}
            />
            <InputValue type="tel" lab="Телефон"
                        register={{...register('phone')}}
                        error={errors.phone?.message ?? ''}
            />
            <InputValue type="password" lab="Пароль"
                        register={{...register('password')}}
                        error={errors.password?.message ?? ''}
            />
            <InputValue type="password" lab="Пароль (еще раз)"
                        register={{...register('confirmPassword')}}
                        error={errors.confirmPassword?.message ?? ''}
            />
        </AuthForm>
    );
}

export default RegForm;
