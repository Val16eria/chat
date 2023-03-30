import React, { FC} from 'react';
import './ChatMain.css';

const ChatMain: FC = () => {

    // const onClick = async () => {
    //     const chatData = await postMessages(Number(id));
    //
    //     if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
    //         console.log('работает')
    //     }
    //     if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
    //         console.log('проблемки')
    //     }
    // }

    return (
        <div className='chat-main'>
            <div className='chat-main__date'>
                <p>19 июня</p>
            </div>
            <div className='chat-main__messages'>
                <p>Chat</p>
            </div>
        </div>
    );
}

export default ChatMain;
