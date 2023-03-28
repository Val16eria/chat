import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IChat } from '../../../shared/api/chat';

import useChatPanel from '../../../hooks/chat-data/useChatPanel';
import useChatUsers from '../../../hooks/chat-users/useChatUsers';
import PopupAddUser from '../../popup/add-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';

interface IChatHeader {
    chatInfo?: IChat[];
}

const ChatHeader:FC<IChatHeader> = ({chatInfo}) => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [panelUserInfo, changeChatInfo] = useChatPanel();
    const [dataUsers] = useChatUsers();

    const {id} = useParams();

    const handleInfo = () => {
        for (let i in panelUserInfo)
        {
            if (panelUserInfo[i].id == Number(id))
            {
                return panelUserInfo[i]
            }
        }
    }

    return (
        <>
            {isPopupOpen && <PopupAddUser modalChange={changeChatInfo} close={() => {setPopupOpen(false)}} />}
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
