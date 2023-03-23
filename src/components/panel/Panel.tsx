import React, { FC } from 'react';

import { IChat } from '../../shared/api/chat';

import Search from './search';
import ChatUser from './chat-user';

import './Panel.css';

interface IPanel {
    modalChange: () => void;
    chatInfo: IChat[];
    query: string;
    changeQuery: (e: any) => void;
}

const Panel: FC<IPanel> = ({modalChange, chatInfo, query, changeQuery}) => {

    return (
        <div className='panel'>
            <Search modalChange={modalChange} changeQuery={changeQuery}/>
            <ChatUser chatInfo={chatInfo} query={query}/>
        </div>
    );
}

export default Panel;
