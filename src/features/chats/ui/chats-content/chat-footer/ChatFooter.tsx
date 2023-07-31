import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useContext,
    useState
} from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../../../shared/hooks';
import { chatThunk, chatsThunk } from '../../../model/redux';
import { ContextChat } from '../../../../../pages/chat/Chat';

import Clip from '../../../../../assets/icons/clip.svg';
import Arrow from '../../../../../assets/icons/arrow.svg';
import './ChatFooter.scss';

export const ChatFooter: FC= () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const socketRefs = useContext(ContextChat);

    const [ message, setMessage ] = useState<string>('')

    const sendChat = async (e:FormEvent<HTMLFormElement>) => {
        if (id) {
            e.preventDefault();
            if (socketRefs !== null) {
                socketRefs.current[Number(id)]?.sendMessage(message);
                await dispatch(chatsThunk({})).unwrap()
                .then(() => dispatch(chatThunk(id)).unwrap());
            }
            if(message.length > 0) {
                setMessage('');
            }
        }
    }

    const textSend = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            className='flexable-row chat-footer__container' 
            onSubmit={(e: FormEvent<HTMLFormElement>) => sendChat(e)}
        >
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
                <input
                    value={message}
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
