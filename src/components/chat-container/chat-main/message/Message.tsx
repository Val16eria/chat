import React, { FC } from 'react';

import { TGetMessage, TSendMessage } from '../../../../shared/types/type-chat/chat';

import './Message.css';

interface IMessage {
    getMessage: TGetMessage[],
    sendMessage: TSendMessage[]
}

const Message: FC<IMessage> = ({getMessage, sendMessage}) => {

    const sendMessage2 = {
        content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории ' +
            '— НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. ' +
            'Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, ' +
            'все тушки этих камер все еще находятся на поверхности Луны, ' +
            'так как астронавты с собой забрали только кассеты с пленкой.\n\n' +
            'Хассельблад в итоге адаптировал SWC для космоса, ' +
            'но что-то пошло не так и на ракету они так никогда и не попали. ' +
            'Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        type: 'message',
        time: '2023-04-04T14:28:31+00:00',
        user_id: 634466,
        id: 1
    }
    console.log('from message', sendMessage)

    return (
        <ul>
            {/*{sendMessage2.map(item => {*/}
            {/*    return (*/}
                    <li key={sendMessage2.id} className='message__container'>
                        <p className='message__name'>Иван</p>
                        <p className='message__content'>{sendMessage2.content}</p>
                        <p className='message__time'>{sendMessage2.time}</p>
                    </li>
                {/*);*/}
            {/*})}*/}
        </ul>
    );
}

export default Message;
