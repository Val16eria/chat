import React, { FC } from 'react';
import useChatPanel from '../../hooks/chat-data/useChatPanel';

import Panel from '../../components/panel';

import './NoneChat.css';

const NoneChat: FC = () => {

    const [userInfo, changeChatInfo] = useChatPanel();

    return (
        <Panel
            chatInfo={userInfo}
            modalChange={changeChatInfo}
        >
            <p className='none-text'>Выберите чат чтобы начать общение</p>
        </Panel>
    );
}

export default NoneChat;
