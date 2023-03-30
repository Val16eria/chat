import React, {FC, useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../../pages/chat-users/ChatUsers';

import CreateChat from '../../../image/createChat.svg';
import ModalNewChat from '../../modal/modal-new-chat';

import './Search.css';

const Search: FC = () => {

    const { search, changeSearch } = useContext(AppContext);
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <>
            {isPopupOpen && <ModalNewChat close={() => {setPopupOpen(false)}}/>}
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
