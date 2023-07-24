import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Arrow from '../../../assets/icons/arrow.svg'
import './BackButton.scss';

export const BackButton: FC = () => {

    const navigate = useNavigate();

    return (
        <div className='back-button__container'>
            <button className='back-button__btn' onClick={() => navigate(-1)}>
                <img src={Arrow} alt='arrow back' className='back-button__btn_img' />
            </button>
        </div>
    );
};
