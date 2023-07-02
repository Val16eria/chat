import React, { FC } from 'react';

import './ChatMain.css';

export const ChatMain: FC = () => {
    // const content = handleInfo()?.last_message?.content !== '' ? <Message /> : '';
    return (
        <div className='chat-main'>
            <div className='chat-main__date'>
                <p>19 июня</p>
            </div>
            {/* {content} */}
        </div>
    );
};
