import React, { FC, useContext }  from 'react';

import { ChatContext, MessageContext } from '../../../../pages/chat-users/ChatUsers';

import CheckLine from '../../../../image/checkLine.svg';
import CheckDoubleLine from '../../../../image/checkDoubleLine.svg';
import './Message.css';

const Message: FC = () => {

    const { sendMessage, getMessage, userId } = useContext(MessageContext);
    const { handleInfo } = useContext(ChatContext);

    console.log('информация1', handleInfo());
    console.log('информация2', sendMessage);

    return (
        <>
            {[sendMessage].map(item => {
                return (
                    // возможно нормально не работет из-за замены сообщения
                    <ul key={item.id} className={item.user_id == userId ? 'message-send' : 'message-get'}>
                        <li key={item.id} className='message__container'>
                            <p className='message__name'>{handleInfo()?.last_message?.user?.first_name}</p>
                            <p className='message__content'>{handleInfo()?.last_message?.content}</p>
                            <div className='message__check'>
                                {item.user_id == userId ?
                                    <img src={getMessage[0]?.is_read ? CheckDoubleLine : CheckLine} alt='check' /> :
                                    '' }
                                <p className='message__time'>{item.time}</p>
                            </div>

                        </li>
                    </ul>
                );
            })}
        </>
    );
}

export default Message;
