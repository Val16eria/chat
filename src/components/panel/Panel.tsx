import React, { FC } from 'react';

import Search from './search';
import ChatUser from './chat-user';

import './Panel.css';

const Panel: FC = () => {
    return (
        <div className='panel'>
            <Search />
            <ChatUser />
        </div>
    );
}

export default Panel;
