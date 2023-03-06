import React, { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import arrowBack from '../../image/arrow.svg'
import './ButtonBack.css';

const ButtonBack: FC = () => {
    const navigate = useNavigate();

    return (
        <div className='buttonBack-container'>
            <button onClick={() => navigate(-1)}>
                <img src={arrowBack} alt='arrow back' className="buttonBack-arrow" />
            </button>
        </div>
    );
}

export default ButtonBack;
