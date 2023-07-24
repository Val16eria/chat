import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Add from '../../../../../assets/icons/add.svg';
import Delete from '../../../../../assets/icons/delete.svg';
import DeleteChat from '../../../../../assets/icons/delete-chat.svg';
import './PopupEditUser.css';
import { ModalUser } from '../../../chats/ui/modal-window/modal-add-user';

interface IPopupAddUser {
    close: () => void;
}

export const PopupEditChat: FC<IPopupAddUser> = ({close}) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const onSubmit = async () => {
        // const chatData = await deleteChat(Number(id))
    }

    const closeAddAction = () => {
        setAddModalOpen(false);
    }

    const openAddAction = () => {
        setAddModalOpen(true);
    }

    const closeDeleteAction = () => {
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
};
