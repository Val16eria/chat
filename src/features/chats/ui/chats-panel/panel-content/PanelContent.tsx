import React, { FC, PropsWithChildren, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ModalNewChat } from '../../modal-window';
import { ChatList } from '../chats-list';
import { Search } from '../search';

import CreateChat from '../../../../../../assets/icons/createChat.svg';
import './PanelContent.scss';

interface IPanelContent {
    children: React.ReactNode;
}

export const PanelContent: FC<PropsWithChildren<IPanelContent>> = ({ children }) => {

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
            <div className='flexable-row panel-content'>
                <div className='flexable-column panel-content__list'>
                    <div className='flexable-column panel-content__search'>
                        <NavLink to='/profile'>Профиль</NavLink>
                        <div className='flexable-row panel-content__search_input'>
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
