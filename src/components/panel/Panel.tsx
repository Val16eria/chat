import React, { FC, HTMLAttributes } from 'react';

import Search from './search';
import ChatList from './chat-list';

import './Panel.css';

interface IPanel extends HTMLAttributes<HTMLFormElement> {
}

const Panel: FC<IPanel> = ({...rest}) => {

    const {children} = rest;

    return (
        <div className='chat'>
            <div className='panel'>
                <Search/>
                <ChatList/>
            </div>
                {children}
        </div>
    );
}

export default Panel;
