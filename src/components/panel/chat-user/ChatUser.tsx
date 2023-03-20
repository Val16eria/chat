import React, { FC } from 'react';
import Avatar from '../../../image/avatar.svg';

import './ChatUser.css';

const ChatUser: FC = () => {
    return (
        <div className='list-container'>
            <div className='list-user'>
                <img src={Avatar} alt='avatar' />
                <div className='list-user__name'>
                    <p>Имя</p>
                    <p>Сообщение</p>
                </div>
            </div>
            <div className='list-user__time'>
                <p>12:51</p>
                <p>2</p>
            </div>
        </div>
    );
}

export default ChatUser;
