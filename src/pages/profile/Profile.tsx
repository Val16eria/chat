import React, { FC } from 'react';

import { useUserSytem } from '../../features/users/model/hooks';

import { ProfileActions, AvatarContent } from '../../features/users/ui';

import { 
    BackButton,
    InfoInput, 
    Loader 
} from '../../shared/ui';

export const Profile: FC = () => {

    const user = useUserSytem();

    return (
        <div className='flexable-row'>
            <BackButton />
            {user ?
            <div className='flexable-column profile__container'>
                <AvatarContent user_name={user?.first_name}/>
                    <div className='flexable-column profile__container_info'>
                        <InfoInput
                            title='Почта'
                            type='email'
                            defaultValue={user?.email}
                            disabled={true}
                        />
                        <InfoInput
                            title='Логин'
                            type='text'
                            defaultValue={user?.login}
                            disabled={true}
                        />
                        <InfoInput
                            title='Имя'
                            type='text'
                            defaultValue={user?.first_name}
                            disabled={true}
                        />
                        <InfoInput
                            title='Фамилия'
                            type='text'
                            defaultValue={user?.second_name}
                            disabled={true}
                        />
                        <InfoInput
                            title='Имя в чате'
                            type='text'
                            defaultValue={user?.display_name}
                            disabled={true}
                        />
                        <InfoInput
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
