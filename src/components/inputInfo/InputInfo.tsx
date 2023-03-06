import React, { FC } from 'react';
import './InputInfo.css';

interface IInputInfo {
    title: string;
    type: string;
    placeholder?: string;
}

const InputInfo: FC<IInputInfo> = ({ title, type }) => {
    return (
        <div className='inputInfo-container'>
            <label>
                {title}
            </label>
            <input type={type} className='inputInfo-input' placeholder='KStorer61@icloud.com' disabled={true} />
        </div>
    );
}

export default InputInfo;
