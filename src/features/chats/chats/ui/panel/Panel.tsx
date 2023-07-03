import React, { FC, HTMLAttributes } from 'react';

import './Panel.css';
import { ChatList } from '../chat-list';
import { Search } from './search';

interface IPanel extends HTMLAttributes<HTMLFormElement> {
}

export const Panel: FC<IPanel> = ({...rest}) => {

    return (
        <div className='chat'>
            <div className='panel'>
                <Search/>
                <ChatList/>
            </div>
            {rest.children}
        </div>
    );
};
