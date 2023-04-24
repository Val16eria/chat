import React, { FC, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CHAT_RESULT_TYPE, deleteChat } from '../../../shared/api/chat';
import { UsersCountContext } from '../../../shared/types/context/contextChatContainer';
import { ChatContext } from '../../../shared/types/context/contextChat';

import ModalUser from '../../modal/modal-user';

import Add from '../../../image/add.svg';
import Delete from '../../../image/delete.svg';
import DeleteChat from '../../../image/delete-chat.svg';
import './PopupEditUser.css';

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
    }

    const closeAddAction = () => {
        changeFlag();
        changeChatInfo();
        setAddModalOpen(false);
    }

    const openAddAction = () => {
        setAddModalOpen(true);
    }

    const closeDeleteAction = () => {
        changeFlag();
        changeChatInfo();
        setDeleteModalOpen(false)
    };

    const openDeleteAction = () => {
        setDeleteModalOpen(true)
    }

    return (
        <>
            {isAddModalOpen && <ModalUser title='Добавить пользователя' btn='Добавить' close={closeAddAction} />}
            {isDeleteModalOpen && <ModalUser title='Удалить пользователя' btn='Удалить' close={closeDeleteAction} />}
            <div className='popup-edit-user' onClick={close}>
                <div className='popup-edit-user__container' onClick={e => e.stopPropagation()}>
                    <div className='popup-edit' onClick={openAddAction}>
                        <img src={Add} alt='add-user' />
                        <p>Добавить пользователя</p>
                    </div>
                    <div className='popup-edit' onClick={openDeleteAction}>
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
