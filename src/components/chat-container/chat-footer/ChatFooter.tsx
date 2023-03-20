import React, { FC } from 'react';

import Clip from '../../../image/clip.svg';
import Arrow from '../../../image/arrow.svg';
import './ChatFooter.css';

const ChatFooter: FC = () => {
    return (
        <div className='chat-footer'>
            <div className='chat-footer__clip'>
                <label htmlFor='choice-file'>
                    <img src={Clip} alt='clip' />
                </label>
                <input style={{display: 'none'}} id='choice-file' type='file' />
            </div>
            <div className='chat-footer__typing'>
                <input type='text' placeholder='Сообщение'/>
            </div>
            <div className='chat-footer__send'>
                <button>
                    <img src={Arrow} alt='arrow back' className='buttonSend-arrow' />
                </button>
            </div>
        </div>
    );
}

export default ChatFooter;
