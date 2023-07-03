import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { putUsers, USER_RESULT_TYPE } from '../../shared/api/users';
import { InputInfo } from '../../shared/ui/inputInfo';

interface IUser {
    // homeUserInfo: TUser
}

export const FormSettings: FC<IUser> = ({}) => {

    const navigate = useNavigate();

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        defaultValues: {
            // first_name: homeUserInfo.first_name,
            // email: homeUserInfo.email,
            // login: homeUserInfo.login,
            // second_name: homeUserInfo.second_name,
            // phone: homeUserInfo.phone,
            // display_name: homeUserInfo.display_name,
        },
        // resolver: yupResolver(schema),
        mode: 'onTouched'
    })

    const onSubmit = async (data: FormData) => {
        // const usersData = await putUsers(data);
    }

    return (
        <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
            {/* <Avatar avatar={homeUserInfo.avatar} /> */}
            <div className='profile-info'>
                <InputInfo
                    title='Почта'
                    type='email'
                    // error={errors.email?.message ?? ''}
                    // {...register('email')}
                />
                <InputInfo
                    title='Логин'
                    type='text'
                    // error={errors.login?.message ?? ''}
                    // {...register('login')}
                />
                <InputInfo
                    title='Имя'
                    type='text'
                    // error={errors.first_name?.message ?? ''}
                    // {...register('first_name')}
                />
                <InputInfo
                    title='Фамилия'
                    type='text'
                    // error={errors.second_name?.message ?? ''}
                    // {...register('second_name')}
                />
                <InputInfo
                    title='Имя в чате'
                    type='text'
                    // error={errors.display_name?.message ?? ''}
                    // {...register('display_name')}
                />
                <InputInfo
                    title='Телефон'
                    type='tel'
                    // error={errors.phone?.message ?? ''}
                    // {...register('phone')}
                />
            </div>
            {/* <Button btn={'Сохранить'} /> */}
        </form>
    );
};

