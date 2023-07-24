import React, { FC, HTMLAttributes } from 'react';

import { IAuthUser } from '../../../../../shared/api';

import { AvatarContent } from '../../avatar';
import { 
    BackButton, 
    BaseButton, 
    Loader 
} from '../../../../../shared/ui';

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
        <div className='flexable-row'>
            <BackButton />
            {user ?
            <form className='settings__form' {...rest}>
                <AvatarContent user_name={user.first_name} />
                <div className='flexable-column settings__form_content'>
                    {rest.children}
                </div>
                <BaseButton btn={btnText} />
            </form>
            : <Loader />}
        </div>
    )
}