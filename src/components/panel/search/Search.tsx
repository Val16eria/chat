import React, {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';

import CreateChat from '../../../image/createChat.svg';
import PopupCreateChat from '../../popup/create-chat/PopupCreateChat';
import './Search.css';

const Search: FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <>
            {isPopupOpen && <PopupCreateChat />}
            <div className='search-container'>
                <NavLink to='/profile'>Профиль</NavLink>
                <div className='search-chat'>
                    <input type='search' placeholder='Поиск' />
                    <img src={CreateChat} alt='create chat' onClick={() => setIsPopupOpen(!isPopupOpen)}/>
                </div>
            </div>
        </>
    );
}

export default Search;
