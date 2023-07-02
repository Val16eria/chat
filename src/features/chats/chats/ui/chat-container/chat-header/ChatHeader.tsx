import React, { FC, useState } from 'react';

import Avatar from '../../../image/avatar.svg';
import './ChatHeader.css';
import { PopupEditUser } from '../../../../../users/ui';

export const ChatHeader:FC = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const onOpen = () => {
        setPopupOpen(true);
    }

    const onClose = () => {
        setPopupOpen(false);
    }

    // const options = userId === handleInfo()?.created_by
        // && <img  src={Ellipsis} alt='option' onClick={onOpen} />;

    return (
        <>
            {isPopupOpen && <PopupEditUser close={onClose} />}
            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        {/* <p>{handleInfo()?.title}</p> */}
                        {/* <p>{dataUsers.length} пользовталей(ля)</p> */}
                    </div>
                </div>
                <div className='chat-header__ellipsis'>
                    {/* {options} */}
                </div>
            </div>
        </>
    );
};
