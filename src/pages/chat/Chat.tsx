import React, { FC } from 'react';
import useChatPanel from '../../hooks/chat-data/useChatPanel';

import Panel from '../../components/panel';
import ChatContainer from '../../components/chat-container';

const Chat: FC = () => {

    const [userInfo, changeChatInfo] = useChatPanel();

    return (
        <Panel
            chatInfo={userInfo}
            modalChange={changeChatInfo}
        >
            <ChatContainer chatInfo={userInfo}/>
        </Panel>
    );
}

export default Chat;
