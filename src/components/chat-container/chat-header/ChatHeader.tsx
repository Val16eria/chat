import React, { FC, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContext } from '../../../pages/chat-users/ChatUsers';

import PopupEditUser from '../../popup/edit-user-chat';

import Avatar from '../../../image/avatar.svg';
import Ellipsis from '../../../image/ellipsis.svg';
import './ChatHeader.css';
import {UsersCountContext} from "../ChatContainer";

// export const UsersCountContext = React.createContext({} as IUsersCount);

const ChatHeader:FC = () => {

    const { id } = useParams();

    const { userInfo } = useContext(ChatContext);
    const { dataUsers, changeFlag } = useContext(UsersCountContext);

    // const [dataUsers, changeFlag] = useChatUsers(Number(id));

    const [isPopupOpen, setPopupOpen] = useState(false);

    // const value: IUsersCount = {
    //     dataUsers,
    //     changeFlag
    // }

    const handleInfo = () => {
        const index = userInfo.map(i => i.id).indexOf(Number(id));
        return userInfo[index];
    }

    return (
        <>
            {/*<UsersCountContext.Provider value={value}>*/}
                {isPopupOpen && <PopupEditUser close={() => {setPopupOpen(false)}} />}
            {/*</UsersCountContext.Provider>*/}

            <div className='chat-header'>
                <div className='chat-header__user'>
                    <img src={Avatar} alt='avatar' />
                    <div className='chat-header__title'>
                        <p>{handleInfo()?.title}</p>
                        <p>{dataUsers.length} пользовталей(ля)</p>
                    </div>
                </div>
                <div className='chat-header__ellipsis'>
                    <img  src={Ellipsis} alt='option' onClick={() => setPopupOpen(true)} />
                </div>
            </div>
        </>
    );
}

export default ChatHeader;
