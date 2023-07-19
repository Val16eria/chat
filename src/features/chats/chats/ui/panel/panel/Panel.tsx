import React, { FC, PropsWithChildren, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ModalNewChat } from '../../modal';
import { ChatList } from '../chat-list';
import { Search } from '../search';

import CreateChat from '../../../../../../assets/icons/createChat.svg';
import './Panel.css';

interface IPanel {
    children: React.ReactNode;
}

export const Panel: FC<PropsWithChildren<IPanel>> = ({ children }) => {

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
            <div className='chat'>
            <div className='panel'>
                <div className='panel__search'>
                    <NavLink to='/profile'>Профиль</NavLink>
                    <div className='panel__search_input'>
                        <Search/>
                        <img src={CreateChat} alt='create chat' onClick={onOpen}/>
                    </div>
                </div>
                <ChatList/>
            </div>
            {children}
        </div>
        </>
    );
};
