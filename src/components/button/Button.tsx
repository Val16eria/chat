import React, { FC } from 'react';
import './Button.css';

interface IButton {
    btn: string;
}

const Button: FC<IButton> = ({ btn }) => {
    return (
        <div className="button">
            <button type='submit'>{btn}</button>
        </div>
    );
}

export default Button;
