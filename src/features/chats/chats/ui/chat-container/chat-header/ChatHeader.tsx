import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../../shared/hooks';
import { selectChats } from '../../../lib';

import { useUserSytem } from '../../../../../auth/login/model/hooks';

import { PopupEditUser } from '../../../../../users/ui';

import Options from '../../../../../../assets/icons/ellipsis.svg'
import Avatar from '../../../../../../assets/icons/avatar.svg';
import './ChatHeader.css';

export const ChatHeader:FC = () => {

    const { id } = useParams();
    const [isPopupOpen, setPopupOpen] = useState(false);

    const chats = useAppSelector(selectChats);
    const user = useUserSytem();
    const chat = chats.find((item) => item.id === Number(id));

    const open = () => {
        setPopupOpen(true);
    }

    const close = () => {
        setPopupOpen(false);
    }

    const options = user.id === chat?.created_by && <img onClick={open} src={Options} alt='options' />;

    return (
        <>
            {isPopupOpen && <PopupEditUser close={close} />}
            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        <p>{chat?.title}</p>
                        {/* <p>{2} пользовталей(ля)</p> */}
                    </div>
                </div>
                <div className='chat-header__ellipsis'>
                    {options}
                </div>
            </div>
        </>
    );
};
