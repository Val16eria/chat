import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TChatUsers } from '../../../shared/types/type-chat/chat';
import { IChat } from '../../../shared/api/chat';

import PopupAddUser from '../../popup/add-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';

interface IChatHeader {
    id?: string;
    userInfo: IChat[];
    modalChange: () => void;
    dataUsers: TChatUsers[];
    userChange: () => void;
}

const ChatHeader:FC<IChatHeader> =
    ({
         userInfo,
         modalChange,
         dataUsers,
         userChange}) => {

    const { id } = useParams();

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleInfo = () => {
        const index = userInfo.map(i => i.id).indexOf(Number(id));
        return userInfo[index];
        // for (let i in userInfo)
        // {
        //     if (userInfo[i].id == Number(id))
        //     {
        //         return userInfo[i]
        //     }
        // }
    }

    return (
        <>
            {isPopupOpen && <PopupAddUser
                modalChange={modalChange}
                userChange={userChange}
                close={() => {setPopupOpen(false)}}
            />}
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
