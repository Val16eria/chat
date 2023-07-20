import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useState
} from 'react';

import Clip from '../../../../../../assets/icons/clip.svg';
import Arrow from '../../../../../../assets/icons/arrow.svg';
import './ChatFooter.scss';

export const ChatFooter: FC = () => {

    const [msg, setMsg] = useState<string>('');

    const sendChat = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(msg.length > 0) {
            setMsg('');
        }
    }

    const textSend = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMsg(e.target.value);
    }

    return (
        <form className='flexable-row chat-footer__container' onSubmit={(e) => sendChat(e)}>
            <div>
                <label htmlFor='choice-file'>
                    <img src={Clip} alt='clip' />
                </label>
                <input
                    style={{display: 'none'}}
                    id='choice-file'
                    type='file'
                />
            </div>
            <div>
                <textarea
                    value={msg}
                    onChange={textSend}
                    placeholder='Сообщение...'
                />
            </div>
            <div className='chat-footer__send'>
                <button>
                    <img
                        src={Arrow}
                        alt='arrow back'
                        className='buttonSend-arrow'
                    />
                </button>
            </div>
        </form>
    );
};
