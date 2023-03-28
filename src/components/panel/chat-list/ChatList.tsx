import React, {FC, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { TChat } from '../../../shared/types/type-chat/chat';
import { CHAT_RESULT_TYPE, postChatToken } from '../../../shared/api/chat';

import Avatar from '../../../image/avatar.svg';

import './ChatList.css';

interface IChatUser {
    userInfo: TChat[];
    search: string;
}

const ChatList:FC<IChatUser> = ({userInfo, search}) => {

    const navigate = useNavigate();

    const [isActive, setActive] = useState<number>(0);

    const onClick = async (item: TChat) => {
        // запрос на отправку токена
        const chatData = await postChatToken('token', item.id);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            console.log('все ок');
            console.log(item.id);
        }
        if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
            navigate('/');
        }

        setActive(item.id);
    }

    return (
        <>
            <ul className='list'>
                {userInfo
                    .filter(item => item.title
                    .toLowerCase()
                    .includes(search.toLowerCase()))
                    .map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink onClick={() => onClick(item)} to={`/chat/${item.id}`}>
                            <div className={isActive === item.id ? 'list-container active' : 'list-container'}>
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
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ChatList;
