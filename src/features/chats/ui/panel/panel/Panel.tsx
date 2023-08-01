import React, { 
    FC,
    PropsWithChildren, 
    useState 
} from 'react';
import { NavLink } from 'react-router-dom';

import { ModalNewChat } from '../../window/modal-window';
import { ChatsList } from '../chats-list';
import { Search } from '../search';

import CreateChat from '../../../../../assets/icons/createChat.svg';
import './Panel.scss';

interface IPanel {
    children: React.ReactNode;
}

export const Panel: FC<PropsWithChildren<IPanel>> = ({ children }) => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const open = () => {
        setPopupOpen(true);
    }

    const close = () => {
        setPopupOpen(false);
    }

    console.log(isPopupOpen);

    return (
        <>
            {isPopupOpen && <ModalNewChat close={close} />}
            <div className='flexable-row panel__container'>
                <div className='flexable-column panel__list'>
                    <div className='flexable-column panel__search'>
                        <NavLink className='panel__search_link' to='/profile'>
                            Профиль 
                        </NavLink>
                        <div className='flexable-row panel__search_input'>
                            <Search/>
                            <img src={CreateChat} alt='create chat' onClick={open}/>
                        </div>
                    </div>
                    <ChatsList/>
                </div>
                {children}
            </div>
        </>
    );
};
