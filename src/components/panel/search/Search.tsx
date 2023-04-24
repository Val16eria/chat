import React, { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ChatContext } from '../../../shared/types/context/contextChat';
import ModalNewChat from '../../modal/modal-new-chat';

import CreateChat from '../../../image/createChat.svg';
import './Search.css';

const Search: FC = () => {

    const { search, changeSearch } = useContext(ChatContext);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const onOpen = () => {
        setPopupOpen(true);
    }

    const onClose = () => {
        setPopupOpen(false);
    }

    return (
        <>
            {isPopupOpen && <ModalNewChat close={onClose} />}
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
                    <img src={CreateChat} alt='create chat' onClick={onOpen}/>
                </div>
            </div>
        </>
    );
}

export default Search;
