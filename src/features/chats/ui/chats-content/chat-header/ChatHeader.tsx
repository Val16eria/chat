import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../shared/hooks';

import { selectChats } from '../../../lib';
import { useUserSytem } from '../../../../users/model/hooks';

import { PopupEditChat } from '../../window';

import Options from '../../../../../assets/icons/ellipsis.svg'
import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './ChatHeader.scss';

export const ChatHeader:FC = () => {

    const { id } = useParams();
    const [ isPopupOpen, setPopupOpen ] = useState(false);

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
            {isPopupOpen && <PopupEditChat close={close} />}
            <div className='flexable-row chat-header__container'>
                <div className='flexable-row chat-header__content'>
                    <img src={AvatarDefault} alt='avatar' />
                    <div className='flexable-column chat-header__content_title'>
                        <p>{chat?.title}</p>
                        {/* <p>{2} пользовталей(ля)</p> */}
                    </div>
                </div>
                <div className='chat-header__options'>
                    {options}
                </div>
            </div>
        </>
    );
};
