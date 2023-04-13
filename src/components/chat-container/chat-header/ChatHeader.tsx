import React, { FC, useContext, useState } from 'react';

import { ChatContext, MessageContext } from '../../../pages/chat-users/ChatUsers';
import { UsersCountContext } from '../ChatContainer';

import PopupEditUser from '../../popup/edit-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';


const ChatHeader:FC = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const { userId } = useContext(MessageContext);
    const { dataUsers } = useContext(UsersCountContext);
    const { handleInfo } = useContext(ChatContext);

    console.log(dataUsers);

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
                    {userId == handleInfo()?.created_by ?
                        <img  src={Ellipsis} alt='option' onClick={() => setPopupOpen(true)} /> : ''}
                </div>
            </div>
        </>
    );
}

export default ChatHeader;
