import React, { FC, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContext } from '../../../pages/chat-users/ChatUsers';
import { TChatUsers } from '../../../shared/types/type-chat/chat';

import PopupEditUser from '../../popup/edit-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';

interface IChatHeader {
    dataUsers: TChatUsers[]
}

const ChatHeader:FC<IChatHeader> = ({dataUsers}) => {

    const { id } = useParams();
    const { userInfo } = useContext(ChatContext);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleInfo = () => {
        const index = userInfo.map(i => i.id).indexOf(Number(id));
        return userInfo[index];
    }

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
