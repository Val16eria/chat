import React, { FC, useContext } from 'react';

import { ChatContext, MessageContext } from '../../../../pages/chat-users/ChatUsers';

import './Message.css';

const Message: FC = () => {

    const { sendMessage } = useContext(MessageContext);
    const { handleInfo } = useContext(ChatContext);

    return (
        <>
            {[sendMessage].map(item => {
                return (
                    <ul key={item.id} className='message'>
                        <li key={item.id} className='message__container'>
                            <p className='message__name'>{handleInfo()?.last_message?.user?.first_name}</p>
                            <p className='message__content'>{handleInfo()?.last_message?.content}</p>
                            <p className='message__time'>{item.time}</p>
                        </li>
                    </ul>
                );
            })}
        </>
    );
}

export default Message;
