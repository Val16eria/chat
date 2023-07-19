import React, { FC } from 'react';

import './Search.css';

export const Search: FC = () => {
    return (
        <>
            <input
                className='search__input'
                type='search'
                name='search'
                // value={search}
                placeholder='Поиск'
                // onChange={changeSearch}
            />
        </>
    );
};
