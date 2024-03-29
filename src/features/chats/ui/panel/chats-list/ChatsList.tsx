import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { chatsThunk } from '../../../model/redux';
import { selectChats } from '../../../lib';

import { IChatInfo } from '../../../../../shared/api';

import AvatarDefault from '../../../../../assets/icons/avatar.svg';
import './ChatsList.scss';

export const ChatsList:FC = () => {

    const dispatch = useAppDispatch();
    const chats = useAppSelector(selectChats);

    useEffect(() => {
        dispatch(chatsThunk({}));
    }, []);

    return (
        <ul className='chat-list'>
            {chats?.map((item: IChatInfo) => (
                <li key={item.id}>
                    <NavLink to={`/chats/${item.id}`}>
                    <div className='flexable-row chat-list__container'>
                        <div className='flexable-row chat-list__content'>
                            <img 
                                className='avatar-style avatar-little' 
                                src={item.avatar || AvatarDefault} 
                                alt='avatar chat' 
                            />
                            <div className='flexable-column chat-list__content_user-name'>
                                <p>{item.title}</p>
                                <p>{item.last_message?.content}</p>
                            </div>
                        </div>
                        <div className='flexable-column chat-list__content_time'>
                            {
                                item.last_message?.time ? 
                                <p>{new Date(item.last_message?.time).toLocaleDateString()}</p> : ''
                            }
                            {item.unread_count ? <p>{item.unread_count}</p> : ''}
                        </div>
                    </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
