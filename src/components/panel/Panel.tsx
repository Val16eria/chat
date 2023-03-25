import React, { FC, HTMLAttributes } from 'react';

import { IChat } from '../../shared/api/chat';

import Search from './search';
import ChatUser from './chat-user';

import './Panel.css';

interface IPanel extends HTMLAttributes<HTMLFormElement> {
    modalChange: () => void;
    chatInfo: IChat[];
}

const Panel: FC<IPanel> = ({modalChange, chatInfo, ...rest}) => {

    const {children} = rest;

    return (
        <div className='chat'>
            <div className='panel'>
                <Search modalChange={modalChange} />
                <ChatUser chatInfo={chatInfo} />
            </div>
            {children}
        </div>
    );
}

export default Panel;
