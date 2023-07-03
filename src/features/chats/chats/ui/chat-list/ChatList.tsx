import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/useRedux';
import { chatsThunk } from '../../model/redux';
import { selectChats } from '../../lib';

import './ChatList.css';

export const ChatList:FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const chats = useAppSelector(selectChats);

    useEffect(() => {
        dispatch(chatsThunk({}));
    }, []);

    console.log('chats', chats);

    const [isActive, setActive] = useState<number>(0);

    const onClick = async (item: any) => {
        // const chatData = await postChatToken('token', item.id);
        setActive(item.id);
    }

    // const listSearch = userInfo.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <ul className='list'>
            {/* {listSearch.map(item => ( */}
                {/* <li key={item.id}>
                    <NavLink onClick={() => onClick(item)} to={`/chats/${item.id}`}>
                        <div className={isActive === item.id ? 'list-container active' : 'list-container'}>
                            <div className='list-user'>
                                <img src={item.avatar || Avatar} alt='avatar'/>
                                <div className='list-user__name'>
                                    <p>{item.title}</p>
                                    <p>{item.last_message?.content}</p>
                                </div>
                            </div>
                            <div className='list-user__time'>
                                <p>{item.last_message?.time}</p>
                                {item.unread_count ? <p>{item.unread_count}</p> : ''}
                            </div>
                        </div>
                    </NavLink>
                </li> */}
            {/* ))} */}
        </ul>
    );
};
