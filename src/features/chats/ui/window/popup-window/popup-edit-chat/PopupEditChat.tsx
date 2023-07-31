import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../../../../shared/hooks';
import { chatsThunk } from '../../../../model/redux';
import { removeChatFile } from '../../../../model/redux/history-chat/chatSlice';

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

interface IPopupState {
    addUser: boolean,
    deleteUser: boolean,
    changeAvatar: boolean
}

export const PopupEditChat: FC<IPopupEditChat> = ({ close }) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const initialState = {
        addUser: false,
        deleteUser: false,
        changeAvatar: false
    }

    const [ isModal, setModal ] = useState<IPopupState>(initialState);
    
    const handleDeleteChat = async () => {
        if (id) {
            await deleteChat(id)
            .then(() => dispatch(chatsThunk({})))
            .then(() => dispatch(removeChatFile(Number(id))))
            .then(() => navigate('/'));
        } 
    }

    const handleClick = (name: keyof(IPopupState)) => {
        setModal(prevState => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    }

    return (
        <>
            {isModal.addUser && 
                <ModalChatUser 
                    title='Добавить пользователя' 
                    btn='Добавить' 
                    close={() => handleClick('addUser')} 
                />
            }
            {isModal.deleteUser && 
                <ModalChatUser 
                    title='Удалить пользователя' 
                    btn='Удалить' 
                    close={() => handleClick('deleteUser')} 
                />
            }
            {isModal.changeAvatar && <ModalNewAvatar close={() => handleClick('changeAvatar')} />}
            <div className='popup-edit-chat__container' onClick={close}>
                <div className='flexable-column popup-edit-chat__container_content' onClick={e => e.stopPropagation()}>
                    <PopupPoint 
                        Image={Add} 
                        text='Добавить пользователя' 
                        func={() => handleClick('addUser')}
                    />
                    <PopupPoint 
                        Image={Delete}  
                        text='Удалить пользователя' 
                        func={() => handleClick('deleteUser')} 
                    />
                    <PopupPoint 
                        Image={ChangeAvatar} 
                        text='Измениь аватар чата' 
                        func={() => handleClick('changeAvatar')} 
                    />
                    <PopupPoint 
                        Image={DeleteDark} 
                        text='Удалить чат' 
                        func={handleDeleteChat} 
                    />
                </div>
            </div>
        </>
    );
};

