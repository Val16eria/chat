import React, { FC, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CHAT_RESULT_TYPE, deleteChat } from '../../../shared/api/chat';
import { ChatContext } from '../../../pages/chat-users/ChatUsers';


import ModalAddUser from '../../modal/modal-action-chat/modal-add-user';
import ModalDeleteUser from '../../modal/modal-action-chat/modal-delete-user';

import Add from '../../../image/add.svg';
import Delete from '../../../image/delete.svg';
import DeleteChat from '../../../image/delete-chat.svg';
import './PopupEditUser.css';
import { UsersCountContext } from '../../chat-container/ChatContainer';


interface IPopupAddUser {
    close: () => void;
}

const PopupEditUser: FC<IPopupAddUser> = ({close}) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { changeChatInfo } = useContext(ChatContext);
    const { changeFlag } = useContext(UsersCountContext);

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const onSubmit = async () => {
        const chatData = await deleteChat(Number(id));

        if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
            changeChatInfo();
            close();
            navigate('/');
        }
        if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
        }
    }

    const closeDeleteAction = () => {
        changeFlag();
        changeChatInfo();
        setDeleteModalOpen(false)
    };

    const closeAddAction = () => {
        changeFlag();
        changeChatInfo();
        setAddModalOpen(false);
    }

    return (
        <>
            {isAddModalOpen && <ModalAddUser close={closeAddAction}/>}
            {isDeleteModalOpen && <ModalDeleteUser close={closeDeleteAction}/>}
            <div className='popup-edit-user' onClick={close}>
                <div className='popup-edit-user__container' onClick={e => e.stopPropagation()}>
                    <div className='popup-edit' onClick={() => {setAddModalOpen(true)}}>
                        <img src={Add} alt='add-user' />
                        <p>Добавить пользователя</p>
                    </div>
                    <div className='popup-edit' onClick={() => setDeleteModalOpen(true)}>
                        <img src={Delete} alt='delete-user' />
                        <p>Удалить пользователя</p>
                    </div>
                    <div className='popup-edit' onClick={onSubmit}>
                        <img src={DeleteChat} alt='delete-user' />
                        <p>Удалить чат</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupEditUser;
