import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../shared/hooks';

import { selectChats } from '../../../lib';
import { selectAuthUser } from '../../../../auth/auth';

import { PopupEditChat } from '../../window';

import Options from '../../../../../assets/icons/ellipsis.svg'
import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './ChatHeader.scss';

export const ChatHeader:FC = () => {

    const { id } = useParams();
    const [ isPopupOpen, setPopupOpen ] = useState(false);

    const open = () => {
        setPopupOpen(true);
    }

    const close = () => {
        setPopupOpen(false);
    }

    const user = useAppSelector(selectAuthUser);
    const chats = useAppSelector(selectChats);
    const chat = chats.find((item) => item.id == Number(id));
    const options = chat?.created_by === user?.id ? 
    <img onClick={open} src={Options} alt='options' /> : '';

    return (
        <>
            {isPopupOpen && <PopupEditChat close={close} />}
            <div className='flexable-row chat-header__container'>
                <div className='flexable-row chat-header__content'>
                    <img 
                        className='avatar-style avatar-little' 
                        src={chat?.avatar || AvatarDefault} 
                        alt='avatar' 
                    />
                    <div className='flexable-column chat-header__content_title'>
                        <p>{chat?.title}</p>
                    </div>
                </div>
                <div className='chat-header__options'>
                    {options}
                </div>
            </div>
        </>
    );
};
