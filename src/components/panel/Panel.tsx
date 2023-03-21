import React, { FC } from 'react';

import { IChat } from '../../shared/api/chat';

import Search from './search';
import ChatUser from './chat-user';

import './Panel.css';

interface IPanel {
    modalChange: () => void;
    chatInfo: IChat[];
}

const Panel: FC<IPanel> = ({modalChange, chatInfo}) => {

    return (
        <div className='panel'>
            <Search modalChange={modalChange} />
            <ChatUser chatInfo={chatInfo}/>
        </div>
    );
}

export default Panel;
