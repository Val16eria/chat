import React, { forwardRef, InputHTMLAttributes } from 'react';

import './InputInfo.css';

interface IInputInfo extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    error?: string,
}

export const InputInfo = forwardRef<HTMLInputElement, IInputInfo>(
    ({title,error,...props}, ref) => {
    return (
        <div className='inputInfo-container' >
            <div>
                <label>{title}</label>
                <p className='error-valid'>{error}</p>
            </div>
            <div>
                <input
                    className='inputInfo-input'
                    {...props}
                    ref={ref}
                />
            </div>
        </div>
    );
});
