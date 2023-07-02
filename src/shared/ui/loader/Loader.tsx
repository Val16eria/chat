import React, { FC } from 'react';

import Loading from '../../image/loading.svg';
import './Loader.css';

export const Loader: FC = () => {
    return (
        <div className='loading'>
            <img alt='loader' src={Loading} />
        </div>
    );
};