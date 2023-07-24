import React, { FC } from 'react';

import Loading from '../../../assets/icons/loading.svg';
import './Loader.scss';

export const Loader: FC = () => {
    return (
        <div className='loader__container'>
            <img alt='loader' src={Loading} />
        </div>
    );
};