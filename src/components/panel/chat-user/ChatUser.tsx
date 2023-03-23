import React, { FC } from 'react';
import { TChat } from '../../../shared/types/type-chat/chat';

import Avatar from '../../../image/avatar.svg';

import './ChatUser.css';

interface IChatUser {
    chatInfo: TChat[];
    query: string;
}

const ChatUser:FC<IChatUser> = ({chatInfo, query}) => {

    return (
        <>
            {/*{chatInfo.length > 0 ?*/}
                <ul className='list'>
                    {chatInfo.filter(i => i.title.toLowerCase().includes(query)).map(item => {
                        return (
                            <li key={item.id}>
                                <div className='list-container'>
                                    <div className='list-user'>
                                        <img src={item.avatar || Avatar} alt='avatar'/>
                                        <div className='list-user__name'>
                                            <p>{item.title}</p>
                                            <p>{item.last_message}</p>
                                        </div>
                                    </div>
                                    <div className='list-user__time'>
                                        <p>12:51</p>
                                        {item.unread_count ? <p>{item.unread_count}</p> : ''}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {/*: <p className='none-chat'>Начните общение</p>}*/}
        </>
    );
}

export default ChatUser;
