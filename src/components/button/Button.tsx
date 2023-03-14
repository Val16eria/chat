import React, { FC } from 'react';
import './Button.css';

interface IButton {
    btn: string;
    onClick?: () => void;
}

const Button: FC<IButton> = ({ btn, onClick }) => {
    return (
        <div className='button-container'>
            <button type='submit' onClick={onClick}>{btn}</button>
        </div>
    );
}

export default Button;
