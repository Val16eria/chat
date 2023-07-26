import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../../../../shared/hooks';
import { chatsThunk } from '../../../../model/redux';

import { deleteChat } from '../../../../../../shared/api';

import { ModalChatUser } from '../../modal-window';
import { ModalNewAvatar } from '../../../../../users/ui/window';
import { PopupPoint } from '../popup-point';

import { 
    Add, 
    Delete, 
    ChangeAvatar, 
    DeleteDark 
} from '../../../../../../assets/svg';
import './PopupEditChat.scss';

interface IPopupEditChat {
    close: () => void;
}

export const PopupEditChat: FC<IPopupEditChat> = ({ close }) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const [ isAddModalOpen, setAddModalOpen ] = useState(false);
    const [ isDeleteModalOpen, setDeleteModalOpen ] = useState(false);
    const [ isModalAvatar, setModalAvatar ] = useState(false);

    const handleDeleteChat = async () => {
        await deleteChat(id as string)
        .then(() => dispatch(chatsThunk({})))
        .then(() => navigate('/'));
    }

    const closeAddAction = () => {
        setAddModalOpen(false);
    }

    const openAddAction = () => {
        setAddModalOpen(true);
    }

    const closeDeleteAction = () => {
        setDeleteModalOpen(false);
    };

    const openDeleteAction = () => {
        setDeleteModalOpen(true);
    }

    const closeModalAvatar = () => {
        setModalAvatar(false);
    }

    const openModalAvatar = () => {
        setModalAvatar(true);
    }

    return (
        <>
            {isAddModalOpen && <ModalChatUser title='Добавить пользователя' btn='Добавить' close={closeAddAction} />}
            {isDeleteModalOpen && <ModalChatUser title='Удалить пользователя' btn='Удалить' close={closeDeleteAction} />}
            {isModalAvatar && <ModalNewAvatar close={closeModalAvatar} />}
            <div className='popup-edit-chat__container' onClick={close}>
                <div className='flexable-column popup-edit-chat__container_content' onClick={e => e.stopPropagation()}>
                    <PopupPoint 
                        Image={Add} 
                        alt='add-user' 
                        text='Добавить пользователя' 
                        func={openAddAction} 
                    />
                    <PopupPoint 
                        Image={Delete} 
                        alt='delete-user' 
                        text='Удалить пользователя' 
                        func={openDeleteAction} 
                    />
                    <PopupPoint 
                        Image={ChangeAvatar} 
                        alt='change-avatar' 
                        text='Измениь аватар чата' 
                        func={openModalAvatar} 
                    />
                    <PopupPoint 
                        Image={DeleteDark} 
                        alt='delete-chat' 
                        text='Удалить чат' 
                        func={handleDeleteChat} 
                    />
                </div>
            </div>
        </>
    );
};
