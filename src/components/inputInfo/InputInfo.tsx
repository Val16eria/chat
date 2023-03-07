import React, { FC } from 'react';
import './InputInfo.css';

interface IInputInfo {
    title: string;
    type: string;
    // todo: добавить null
    placeholder?: string;
}

const InputInfo: FC<IInputInfo> = ({ title, type, placeholder}) => {
    return (
        <div className='inputInfo-container'>
            <label>
                {title}
            </label>
            <input type={type} className='inputInfo-input' placeholder={placeholder} disabled={false} />
        </div>
    );
}

export default InputInfo;
