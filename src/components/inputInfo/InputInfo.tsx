import React, { FC } from 'react';
import './InputInfo.css';

interface IInputInfo {
    title: string;
    type: string;
    placeholder?: string;
    disabled: boolean;
}

const InputInfo: FC<IInputInfo> = ({ title, type, placeholder, disabled}) => {
    return (
        <div className='inputInfo-container'>
            <label>
                {title}
            </label>
            <input type={type} className='inputInfo-input' placeholder={placeholder} disabled={disabled} />
        </div>
    );
}

export default InputInfo;
