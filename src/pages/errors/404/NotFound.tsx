import React, { FC } from 'react';

import { Link } from '../../../shared/ui';

import './NotFound.scss';

export const NotFound: FC = () => {
    return (
        <div className='flexable-column not-found__container'>
            <div className='flexable-column not-found__title'>
                <h2 className='text-extra-big'>404</h2>
                <p className='text-big'>Не туда попали</p>
            </div>
            <Link linkText='Назад к чатам' linkUrl='/' />
        </div>
    );
};
