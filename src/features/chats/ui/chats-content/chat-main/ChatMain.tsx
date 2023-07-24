import React, { FC } from 'react';

import './ChatMain.scss';

export const ChatMain: FC = () => {
    // const content = handleInfo()?.last_message?.content !== '' ? <Message /> : '';
    return (
        <div className='flexable-column chat-main__container'>
            <div className='chat-main__date'>
                <p>{`${new Date().getDay()} ${new Date().getMonth()}`}</p>
            </div>
            {/* {content} */}
        </div>
    );
};
