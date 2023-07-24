import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { chatsThunk } from '../../../model/redux';
import { selectChats } from '../../../lib';

import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './ChatsList.scss';

export const ChatsList:FC = () => {

    const dispatch = useAppDispatch();
    const chats = useAppSelector(selectChats);
    
    const [isActive, setActive] = useState<number>(0);

    useEffect(() => {
        dispatch(chatsThunk({}));
    }, []);

    const onClick = async (item: any) => {
        setActive(item.id);
    }

    return (
        <ul className='chat-list'>
            {chats.map((item) => (
                <li key={item.id}>
                <NavLink onClick={() => onClick(item)} to={`/chats/${item.id}`}>
                    <div className={isActive === item.id ? 
                        'flexable-row chat-list__container active' : 
                        'flexable-row chat-list__container'}
                    >
                        <div className='flexable-row chat-list__content'>
                            <img src={item.avatar || AvatarDefault} alt='avatar'/>
                            <div className='flexable-column chat-list__content_user-name'>
                                <p>{item.title}</p>
                                <p>{item.last_message.content}</p>
                            </div>
                        </div>
                        <div className='flexable-column chat-list__content_time'>
                            <p>{item.last_message.time}</p>
                            {item.unread_count ? <p>{item.unread_count}</p> : ''}
                        </div>
                    </div>
                </NavLink>
            </li>
            ))}
        </ul>
    );
};
