import React, { FC } from 'react';

import Loading from '../../../assets/icons/loading.svg';
import './Loader.css';

export const Loader: FC = () => {
    return (
        <div className='loading'>
            <img alt='loader' src={Loading} />
        </div>
    );
};