import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ModalChatUser } from '../modal-window';

import Add from '../../../../../assets/icons/add.svg';
import Delete from '../../../../../assets/icons/delete.svg';
import DeleteChat from '../../../../../assets/icons/delete-chat.svg';
import './PopupEditChat.scss';

interface IPopupEditChat {
    close: () => void;
}

export const PopupEditChat: FC<IPopupEditChat> = ({ close }) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ isAddModalOpen, setAddModalOpen ] = useState(false);
    const [ isDeleteModalOpen, setDeleteModalOpen ] = useState(false);

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
            {isAddModalOpen && <ModalChatUser title='Добавить пользователя' btn='Добавить' close={closeAddAction} />}
            {isDeleteModalOpen && <ModalChatUser title='Удалить пользователя' btn='Удалить' close={closeDeleteAction} />}
            <div className='popup-edit-chat__container' onClick={close}>
                <div className='flexable-column popup-edit-chat__container_content' onClick={e => e.stopPropagation()}>
                    <div className='flexable-row popup-edit-chat__content_point' onClick={openAddAction}>
                        <img src={Add} alt='add-user' />
                        <p className='popup-edit-chat__point_text'>Добавить пользователя</p>
                    </div>
                    <div className='flexable-row popup-edit-chat__content_point' onClick={openDeleteAction}>
                        <img src={Delete} alt='delete-user' />
                        <p className='popup-edit-chat__point_text'>Удалить пользователя</p>
                    </div>
                    <div className='flexable-row popup-edit-chat__content_point' onClick={onSubmit}>
                        <img src={DeleteChat} alt='delete-user' />
                        <p className='popup-edit-chat__point_text'>Удалить чат</p>
                    </div>
                </div>
            </div>
        </>
    );
};
