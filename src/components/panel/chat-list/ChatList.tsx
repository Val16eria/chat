import React, { FC, useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { TChat } from '../../../shared/types/type-chat/chat';
import { CHAT_RESULT_TYPE, postChatToken } from '../../../shared/api/chat';
import { ChatContext } from '../../../pages/chat-users/ChatUsers';

import Avatar from '../../../image/avatar.svg';

import './ChatList.css';

interface IChatUser {
}

const ChatList:FC<IChatUser> = () => {

    const navigate = useNavigate();

    const { userInfo, changeChatInfo, search } = useContext(ChatContext);
    const [isActive, setActive] = useState<number>(0);

    const onClick = async (item: TChat) => {
        const chatData = await postChatToken('token', item.id);

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            changeChatInfo();
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
                        console.log(item);
                    return (
                        <li key={item.id}>
                            <NavLink onClick={() => onClick(item)} to={`/chats/${item.id}`}>
                                <div className={isActive === item.id ? 'list-container active' : 'list-container'}>
                                    <div className='list-user'>
                                        <img src={item.avatar || Avatar} alt='avatar'/>
                                        <div className='list-user__name'>
                                            <p>{item.title}</p>
                                            {/* или getMessage */}
                                            <p>{item.last_message?.content}</p>
                                        </div>
                                    </div>
                                    <div className='list-user__time'>
                                        {/* или getMessage */}
                                        <p>{item.last_message?.time}</p>
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
