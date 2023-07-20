import React, { FC, HTMLAttributes } from 'react';

import { IAuthUser } from '../../../../shared/api';

import { Avatar } from '../../../../features/users/ui';
import { Button, ButtonBack, Loader } from '../../../../shared/ui';

import './SettingsForm.css';

interface ISettingsForm extends HTMLAttributes<HTMLFormElement> {
    btnText: string;
    user: IAuthUser | null;
}

export const SettingsForm: FC<ISettingsForm> = (
    {
        btnText, 
        user, 
        ...rest
    }
) => {
    return (
        <div className='profile'>
            <ButtonBack />
            {user ?
            <form className='profile-container__settings' {...rest}>
                <Avatar user_name={user.first_name} />
                <div className='profile-info'>
                    {rest.children}
                </div>
                <Button btn={btnText} />
            </form>
            : <Loader />}
        </div>
    )
}