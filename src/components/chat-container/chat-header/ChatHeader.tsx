import React, {FC, useContext, useState} from 'react';

import { TChatUsers } from '../../../shared/types/type-chat/chat';

import PopupEditUser from '../../popup/edit-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';
import {ChatContext} from "../../../pages/chat-users/ChatUsers";

interface IChatHeader {
    dataUsers: TChatUsers[]
}

const ChatHeader:FC<IChatHeader> = ({dataUsers}) => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const { handleInfo } = useContext(ChatContext);

    return (
        <>
            {isPopupOpen && <PopupEditUser close={() => {setPopupOpen(false)}} />}

            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        <p>{handleInfo()?.title}</p>
                        <p>{dataUsers.length} пользовталей(ля)</p>
                    </div>
                </div>
                <div className='chat-header__ellipsis'>
                    <img  src={Ellipsis} alt='option' onClick={() => setPopupOpen(true)} />
                </div>
            </div>
        </>
    );
}

export default ChatHeader;
