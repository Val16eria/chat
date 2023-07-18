import React, { FC, PropsWithChildren } from 'react';

import { ChatList } from '../chat-list';
import { Search } from './search';

import './Panel.css';
interface IPanel {
    children: React.ReactNode;
}

export const Panel: FC<PropsWithChildren<IPanel>> = ({ children }) => {
    return (
        <div className='chat'>
            <div className='panel'>
                <Search/>
                <ChatList/>
            </div>
            {children}
        </div>
    );
};
