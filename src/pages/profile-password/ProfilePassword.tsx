import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import {putPassword, USER_RESULT_TYPE } from '../../shared/api/users';
import ButtonBack from '../../components/buttonBack';
import InputInfo from '../../components/inputInfo';
import Avatar from '../../components/avatar/Avatar';
import useProfile from '../../hooks/user-data/useProfile';
import Button from '../../components/button';
import '../profile-settings/ProfileSettings.css';

const schema = yup.object({
    oldPassword: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    newPassword: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    confirmPassword: yup
        .string()
        .required('Обязательное поле')
        .oneOf([yup.ref('newPassword'), ''], 'Пароли не совпадают')
});

type FormData = yup.InferType<typeof schema>;

const ProfilePassword: FC = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, setError, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const [homeUserInfo, changeInfo] = useProfile();
    //const [isDisabled, setIsDisables] = useState(true);

    const onSubmit = async (data: FormData) => {
        const usersPassword = await putPassword(data);

        if (usersPassword.type === USER_RESULT_TYPE.SUCCESS) {
            navigate('/');
        }
        if (usersPassword.type === USER_RESULT_TYPE.FAILURE) {
            setError('oldPassword', {type: 'custom', message: usersPassword.data})
        }
    }

    return (
        <div className='profile'>
            <ButtonBack />
            <form className='profile-container__settings' onSubmit={handleSubmit(onSubmit)}>
                <Avatar avatar={homeUserInfo.avatar} />
                <div className='profile-info'>
                    <InputInfo
                        title='Старый пароль'
                        type='password'
                        error={errors.oldPassword?.message ?? ''}
                        defaultValue={homeUserInfo.password}
                        register={{...register('oldPassword', {
                                //disabled: isDisabled,
                                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'password') //поменять
                            })}}
                        //changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Новый пароль'
                        type='password'
                        error={errors.newPassword?.message ?? ''}
                        defaultValue={''}
                        register={{...register('newPassword', {
                                //disabled: isDisabled,
                                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'password') //поменять
                            })}}
                        //changeDisable={() => setIsDisables(!isDisabled)}
                    />
                    <InputInfo
                        title='Повторить новый пароль'
                        type='password'
                        error={errors.confirmPassword?.message ?? ''}
                        defaultValue={''}
                        register={{...register('confirmPassword', {
                                //disabled: isDisabled,
                                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                    changeInfo(e.target.value, 'password') //поменять
                            })}}
                        //changeDisable={() => setIsDisables(!isDisabled)}
                    />
                </div>
                <Button btn={'Сохранить'} />
            </form>
        </div>
    );
}

export default ProfilePassword;
