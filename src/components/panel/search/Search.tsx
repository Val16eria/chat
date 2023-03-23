import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import CreateChat from '../../../image/createChat.svg';
import ModalChat from '../../modal/modal-chat';

import './Search.css';

interface ISearch {
    modalChange: () => void;
    changeQuery: (e: any) => void;
}

const Search: FC<ISearch> = ({modalChange, changeQuery}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            {isPopupOpen && <ModalChat modalChange={modalChange} close={() => {setIsPopupOpen(false)}} />}
            <div className='search-container'>
                <NavLink to='/profile'>Профиль</NavLink>
                <div className='search-chat'>
                    <input
                        type='search'
                        name='search'
                        placeholder='Поиск'
                        // производит поиск
                        onChange={(e) => changeQuery(e)}
                    />
                    <img src={CreateChat} alt='create chat' onClick={() => setIsPopupOpen(true)}/>
                </div>
            </div>
        </>
    );
}

export default Search;