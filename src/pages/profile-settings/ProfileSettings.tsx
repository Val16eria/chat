import React, { FC } from 'react';

import './ProfileSettings.css';
// import { FormSettings } from './FormSettings';
import { ButtonBack } from '../../shared/ui/button-back';

export const ProfileSettings: FC = () => {

    // const [homeUserInfo] = useProfile();

    return (
        <div className='profile'>
            <ButtonBack />
            {/* {homeUserInfo.email ? <FormSettings homeUserInfo={homeUserInfo} /> : <Loader />} */}
        </div>
    );
};
