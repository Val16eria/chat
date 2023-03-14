import React, { FC } from 'react';
import './InputInfo.css';

interface IInputInfo {
    title: string;
    type: string;
    value?: any;
    disabled: boolean;
    onChange?: any,
    changeDisable?: () => void
}

const InputInfo: FC<IInputInfo> = (
    {
        title,
        type,
        value,
        disabled,
        onChange,
        changeDisable
    }) => {
    return (
        <div className='inputInfo-container' onDoubleClick={changeDisable}>
            <label>
                {title}
            </label>
            <input
                type={type}
                className='inputInfo-input'
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
        </div>
    );
}

export default InputInfo;
