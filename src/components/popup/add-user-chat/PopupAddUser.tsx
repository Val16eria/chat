import React, {FC, useState} from 'react';

import ModalAddUser from '../../modal/modal-add-user';

import Add from '../../../image/add.svg';
import Delete from '../../../image/delete.svg';
import './PopupAddUser.css';
import ModalDeleteUser from "../../modal/modal-delete-user";

interface IPopupAddUser {
    close: () => void;
    modalChange: () => void;
}

const PopupAddUser: FC<IPopupAddUser> = ({close, modalChange}) => {

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    return (
        <>
            {isAddModalOpen && <ModalAddUser modalChange={modalChange} close={() => {setAddModalOpen(false)}} />}
            {isDeleteModalOpen && <ModalDeleteUser modalChange={modalChange} close={() => {setDeleteModalOpen(false)}} />}
            <div className='popup-add-user' onClick={close}>
                <div className='popup-add-user__container' onClick={e => e.stopPropagation()}>
                    <div className='popup-add' onClick={() => {setAddModalOpen(true)}}>
                        <img src={Add} alt='create' />
                        <p>Добавить пользователя</p>
                    </div>
                    <div className='popup-add' onClick={() => setDeleteModalOpen(true)} >
                        <img src={Delete} alt='create' />
                        <p>Удалить пользователя</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupAddUser;
