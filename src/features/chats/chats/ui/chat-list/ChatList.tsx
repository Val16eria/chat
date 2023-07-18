import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/useRedux';
import { chatsThunk } from '../../model/redux';
import { selectChats } from '../../lib';

import Avatar from '../../../../../assets/icons/avatar.svg';
import './ChatList.css';

export const ChatList:FC = () => {

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
        <ul className='list'>
            {chats.map((item) => (
                <li key={item.id}>
                <NavLink onClick={() => onClick(item)} to={`/chats/${item.id}`}>
                    <div className={isActive === item.id ? 'list-container active' : 'list-container'}>
                        <div className='list-user'>
                            <img src={item.avatar || Avatar} alt='avatar'/>
                            <div className='list-user__name'>
                                <p>{item.title}</p>
                                <p>{item.last_message.content}</p>
                            </div>
                        </div>
                        <div className='list-user__time'>
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
