import React, { FC } from 'react';

import ButtonBack from '../../components/buttonBack';
import FormSettings from './FormSettings';
import useProfile from '../../hooks/user-data/useProfile';
import Loader from '../../components/loader';

import './ProfileSettings.css';

const ProfileSettings: FC = () => {

    const [homeUserInfo] = useProfile();

    return (
        <div className='profile'>
            <ButtonBack />
            {homeUserInfo.email ? <FormSettings homeUserInfo={homeUserInfo} /> : <Loader />}
        </div>
    );
}

export default ProfileSettings;
