import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { authUserThunk } from '../../../features/auth/auth/model/redux';
import { selectAuthUser } from '../../../features/auth/auth/lib';

import { 
    ButtonBack, 
    InputInfo, 
    Loader 
} from '../../../shared/ui';
import { Avatar } from '../../../features/users/ui';
import { ProfileActions } from '../profile-actions';

import './ProfileContent.scss';

export const ProfileContent: FC = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(selectAuthUser);

    useEffect(() => {
        dispatch(authUserThunk());
    }, []);

    return (
        <div className='flexible-row'>
            <ButtonBack />
            {user ?
            <div className='flexible-column profile-container'>
                <Avatar user_name={user?.first_name}/>
                    <div className='flexible-column profile-info'>
                        <InputInfo
                            title='Почта'
                            type='email'
                            defaultValue={user?.email}
                            disabled={true}
                        />
                        <InputInfo
                            title='Логин'
                            type='text'
                            defaultValue={user?.login}
                            disabled={true}
                        />
                        <InputInfo
                            title='Имя'
                            type='text'
                            defaultValue={user?.first_name}
                            disabled={true}
                        />
                        <InputInfo
                            title='Фамилия'
                            type='text'
                            defaultValue={user?.second_name}
                            disabled={true}
                        />
                        <InputInfo
                            title='Имя в чате'
                            type='text'
                            defaultValue={user?.display_name}
                            disabled={true}
                        />
                        <InputInfo
                            title='Телефон'
                            type='tel'
                            defaultValue={user?.phone}
                            disabled={true}
                        />
                    </div>
                    <ProfileActions />
                </div>
            : <Loader/>}
        </div>
    );
};
