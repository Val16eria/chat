import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Arrow from '../../../assets/icons/arrow.svg'
import './ButtonBack.css';

export const ButtonBack: FC = () => {

    const navigate = useNavigate();

    return (
        <div className='buttonBack-container'>
            <button onClick={() => navigate(-1)}>
                <img src={Arrow} alt='arrow back' className='buttonBack-arrow' />
            </button>
        </div>
    );
};
