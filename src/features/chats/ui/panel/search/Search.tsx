import React, { FC } from 'react';

import './Search.scss';

export const Search: FC = () => {
    return (
        <>
            <input
                className='search__input'
                type='search'
                name='search'
                placeholder='Поиск'
            />
        </>
    );
};
