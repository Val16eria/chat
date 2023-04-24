import React, { FC, useContext, useState } from 'react';

import { MessageContext } from '../../../shared/types/context/contextMessage';
import { UsersCountContext } from '../../../shared/types/context/contextChatContainer';
import { ChatContext } from '../../../shared/types/context/contextChat';

import PopupEditUser from '../../popup/edit-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';

const ChatHeader:FC = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const { userId } = useContext(MessageContext);
    const { dataUsers } = useContext(UsersCountContext);
    const { handleInfo } = useContext(ChatContext);

    const onOpen = () => {
        setPopupOpen(true);
    }

    const onClose = () => {
        setPopupOpen(false);
    }

    const options = userId === handleInfo()?.created_by
        && <img  src={Ellipsis} alt='option' onClick={onOpen} />;

    return (
        <>
            {isPopupOpen && <PopupEditUser close={onClose} />}
            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        <p>{handleInfo()?.title}</p>
                        <p>{dataUsers.length} пользовталей(ля)</p>
                    </div>
                </div>
                <div className='chat-header__ellipsis'>
                    {options}
                </div>
            </div>
        </>
    );
}

export default ChatHeader;
