import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './NotFound.scss';

export const NotFound: FC = () => {
    return (
        <div className='flexable-column not-found__container'>
            <div className='flexable-column not-found__title'>
                <h2>404</h2>
                <p>Не туда попали</p>
            </div>
            <NavLink to='/'>Назад к чатам</NavLink>
        </div>
    );
};
