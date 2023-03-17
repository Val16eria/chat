import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { postSignUp, USER_RESULT_TYPE } from '../../shared/api/auth';

import InputValue from '../../components/input/InputValue';
import AuthForm from '../../components/auth-form/AuthForm';

const schema = yup.object({
    email: yup
        .string()
        .email('Неправильный формат ввода')
        .required('Обязательное поле'),
    login: yup
        .string()
        .required('Обязательное поле'),
    first_name: yup
        .string()
        .required('Обязательное поле'),
    second_name: yup
        .string()
        .required('Обязательное поле'),
    phone: yup
        .string()
        .required('Обязательное поле'),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    confirmPassword: yup
        .string()
        .required('Обязательное поле')
        .oneOf([yup.ref('password'), ''], 'Пароли не совпадают')
});

type FormData = yup.InferType<typeof schema>;

const RegForm: FC = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const regData = await postSignUp(data);

        if (regData.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/auth/login');
        }
        if (regData.type === USER_RESULT_TYPE.FAILURE) {
            navigate('/auth/login');
        }
    }

    return (
        <AuthForm
            title='Регистрация'
            btn='Зарегистрироваться'
            linkText='Войти'
            linkUrl='/auth/login'
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputValue
                type='email'
                lab='Почта'
                register={{...register('email')}}
                error={errors.email?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Логин'
                register={{...register('login')}}
                error={errors.login?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Имя'
                register={{...register('first_name')}}
                error={errors.first_name?.message ?? ''}
            />
            <InputValue
                type='text'
                lab='Фамилия'
                register={{...register('second_name')}}
                error={errors.second_name?.message ?? ''}
            />
            <InputValue
                type='tel'
                lab='Телефон'
                register={{...register('phone')}}
                error={errors.phone?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль'
                register={{...register('password')}}
                error={errors.password?.message ?? ''}
            />
            <InputValue
                type='password'
                lab='Пароль (еще раз)'
                register={{...register('confirmPassword')}}
                error={errors.confirmPassword?.message ?? ''}
            />
        </AuthForm>
    );
}

export default RegForm;
