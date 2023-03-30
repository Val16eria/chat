import React, { FC, useContext, useState } from 'react';

import { TChatUsers } from '../../../shared/types/type-chat/chat';
import { AppContext } from '../../../pages/chat-users/ChatUsers';

import PopupAddUser from '../../popup/add-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';

interface IChatHeader {
    id?: string;
    dataUsers: TChatUsers[];
}

const ChatHeader:FC<IChatHeader> = ({dataUsers, id}) => {

    const { userInfo } = useContext(AppContext);

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleInfo = () => {
        const index = userInfo.map(i => i.id).indexOf(Number(id));
        return userInfo[index];
    }

    return (
        <>
            {isPopupOpen && <PopupAddUser close={() => {setPopupOpen(false)}} />}
            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        <p>{handleInfo()?.title}</p>
                        <p>{dataUsers.length} пользовталей(ля)</p>
                    </div>
                </div>
                <img src={Ellipsis} alt='option' onClick={() => setPopupOpen(true)} />
            </div>
        </>
    );
}

export default ChatHeader;
