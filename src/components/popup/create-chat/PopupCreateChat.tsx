import React, { FC } from 'react';

import iconCreate from '../../../image/iconChat.svg';
import './PopupCreateChat.css';

const PopupCreateChat: FC = () => {
    return (
      <div className='popup-create-chat__container'>
          <img src={iconCreate} alt='create' />
          <p>Создать группу</p>
      </div>
    );
}

export default PopupCreateChat;
