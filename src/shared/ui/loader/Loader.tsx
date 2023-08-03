import React, { FC } from 'react';

import { Portal } from '../portal';

import Loading from '../../../assets/icons/loading.svg';
import './Loader.scss';

export const Loader: FC = () => {
    return (
        <Portal>
            <div className='loader__container'>
                <div className='loader__content'>
                    <img alt='loader' src={Loading} />
                </div>
            </div>
        </Portal>
    );
};