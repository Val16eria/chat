import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useContext,
    useState
} from 'react';

import { MessageContext } from '../../../shared/types/context/contextMessage';
import { ChatContext } from '../../../shared/types/context/contextChat';

import Clip from '../../../image/clip.svg';
import Arrow from '../../../image/arrow.svg';
import './ChatFooter.css';

const ChatFooter: FC = () => {

    const { handleSendMsg, handleFlag } = useContext(MessageContext);
    const { changeChatInfo } = useContext(ChatContext);

    const [msg, setMsg] = useState<string>('');

    const sendChat = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        changeChatInfo();

        if(msg.length > 0) {
            handleSendMsg(msg);
            handleFlag();
            setMsg('');
        }
    }

    const textSend = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMsg(e.target.value);
    }

    return (
        <form className='chat-footer' onSubmit={(e) => sendChat(e)}>
            <div className='chat-footer__clip'>
                <label htmlFor='choice-file'>
                    <img src={Clip} alt='clip' />
                </label>
                <input
                    style={{display: 'none'}}
                    id='choice-file'
                    type='file'
                />
            </div>
            <div className='chat-footer__typing'>
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
}

export default ChatFooter;
