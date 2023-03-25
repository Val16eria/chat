import React, { FC } from 'react';

import { IChat } from '../../../shared/api/chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';

import './ChatHeader.css';

interface IChatHeader {
    chatInfo: IChat[];
}

const ChatHeader:FC<IChatHeader> = ({chatInfo}) => {
    return (
        <div className='chat-header'>
            <div className='chat-header__user'>
                <img src={Avatar} alt='avatar' />
                <p>Имя</p>
            </div>
            <img src={Ellipsis} alt='option' />
        </div>
    );
}

export default ChatHeader;
