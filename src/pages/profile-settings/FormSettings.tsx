import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { putUsers, USER_RESULT_TYPE } from '../../shared/api/users';
import * as yup from 'yup';

import { TUser } from '../../shared/types/type-profile/profile';

import Avatar from '../../components/avatar';
import InputInfo from '../../components/inputInfo';
import Button from '../../components/button';

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
    display_name: yup
        .string(),
    phone: yup
        .string()
        .required('Обязательное поле'),
});

type FormData = yup.InferType<typeof schema>;

interface IUser {
    homeUserInfo: TUser
}

const FormSettings: FC<IUser> = ({homeUserInfo}) => {

    const navigate = useNavigate();

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        defaultValues: {
            first_name: homeUserInfo.first_name,
            email: homeUserInfo.email,
            login: homeUserInfo.login,
            second_name: homeUserInfo.second_name,
            phone: homeUserInfo.phone,
            display_name: homeUserInfo.display_name,
        },
        resolver: yupResolver(schema),
        mode: 'onTouched'
    })

    const onSubmit = async (data: FormData) => {
        const usersData = await putUsers(data);

        if (usersData.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/profile');
        }
        if (usersData.type === USER_RESULT_TYPE.FAILURE) {
            setError('email', {type: 'custom', message: usersData.data})
        }
    }

    return (
        <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
            <Avatar avatar={homeUserInfo.avatar} />
            <div className='profile-info'>
                <InputInfo
                    title='Почта'
                    type='email'
                    error={errors.email?.message ?? ''}
                    {...register('email')}
                />
                <InputInfo
                    title='Логин'
                    type='text'
                    error={errors.login?.message ?? ''}
                    {...register('login')}
                />
                <InputInfo
                    title='Имя'
                    type='text'
                    error={errors.first_name?.message ?? ''}
                    {...register('first_name')}
                />
                <InputInfo
                    title='Фамилия'
                    type='text'
                    error={errors.second_name?.message ?? ''}
                    {...register('second_name')}
                />
                <InputInfo
                    title='Имя в чате'
                    type='text'
                    error={errors.display_name?.message ?? ''}
                    {...register('display_name')}
                />
                <InputInfo
                    title='Телефон'
                    type='tel'
                    error={errors.phone?.message ?? ''}
                    {...register('phone')}
                />
            </div>
            <Button btn={'Сохранить'} />
        </form>
    );

}

export default FormSettings;
