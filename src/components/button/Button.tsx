import React, { FC } from 'react';
import './Button.css';

interface IButton {
    btn: string;
}

const Button: FC<IButton> = ({ btn}) => (
    <div className='button-container'>
        <button type='submit' >{btn}</button>
    </div>
)

export default Button;
