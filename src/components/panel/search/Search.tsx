import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import CreateChat from '../../../image/createChat.svg';
import ModalNewChat from '../../modal/modal-new-chat';

import './Search.css';

interface ISearch {
    modalChange: () => void;
    search: string;
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({modalChange, changeSearch, search}) => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <>
            {isPopupOpen && <ModalNewChat modalChange={modalChange} close={() => {setPopupOpen(false)}} />}
            <div className='search-container'>
                <NavLink to='/profile'>Профиль</NavLink>
                <div className='search-chat'>
                    <input
                        type='search'
                        name='search'
                        value={search}
                        placeholder='Поиск'
                        onChange={changeSearch}
                    />
                    <img src={CreateChat} alt='create chat' onClick={() => setPopupOpen(true)}/>
                </div>
            </div>
        </>
    );
}

export default Search;
