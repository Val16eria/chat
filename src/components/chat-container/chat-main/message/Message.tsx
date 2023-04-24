import React, { FC, useContext }  from 'react';

import { MessageContext } from '../../../../shared/types/context/contextMessage';
import { ChatContext } from '../../../../shared/types/context/contextChat';

import CheckLine from '../../../../image/checkLine.svg';
import CheckDoubleLine from '../../../../image/checkDoubleLine.svg';
import './Message.css';

const Message: FC = () => {

    const { sendMessage, getMessage, userId } = useContext(MessageContext);
    const { handleInfo } = useContext(ChatContext)

    return (
        <ul key={sendMessage.id} className={sendMessage.user_id == userId ? 'message-send' : 'message-get'}>
            <li key={sendMessage.id} className='message__container'>
                <p className='message__name'>{handleInfo()?.last_message?.user?.first_name}</p>
                <p className='message__content'>{handleInfo()?.last_message?.content}</p>
                <div className='message__check'>
                    {sendMessage.user_id == userId ?
                        <img src={getMessage[0]?.is_read ? CheckDoubleLine : CheckLine} alt='check' /> :
                        '' }
                    <p className='message__time'>{sendMessage.time}</p>
                </div>
            </li>
        </ul>
    );
}

export default Message;
