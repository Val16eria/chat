import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '../../components/validateData/schemaRegistration';
import { FormData } from '../../components/validateData/schemaRegistration';
import { postSignUp, USER_RESULT_TYPE } from '../../shared/api/auth';

import InputValue from '../../components/input/InputValue';
import DataPage from '../../components/form-data';


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
        <DataPage
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
        </DataPage>
    );
}

export default RegForm;
