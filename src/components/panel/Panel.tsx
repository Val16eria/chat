import React, { FC, HTMLAttributes } from 'react';

import { IChat } from '../../shared/api/chat';

import Search from './search';
import ChatUser from './chat-user';

import './Panel.css';

interface IPanel extends HTMLAttributes<HTMLFormElement> {
    modalChange: () => void;
    userInfo: IChat[];
    search: string;
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Panel: FC<IPanel> = ({modalChange, userInfo, search, changeSearch, ...rest}) => {

    const {children} = rest;

    return (
        <div className='chat'>
            <div className='panel'>
                <Search
                    modalChange={modalChange}
                    changeSearch={changeSearch}
                    search={search}
                />
                <ChatUser
                    userInfo={userInfo}
                />
            </div>
            {children}
        </div>
    );
}

export default Panel;
