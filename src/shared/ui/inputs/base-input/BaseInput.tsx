import React, { forwardRef, InputHTMLAttributes } from 'react';

import './BaseInput.scss';

interface IBaseInput extends InputHTMLAttributes<HTMLInputElement>{
    lab: string;
    error: string;
}

// eslint-disable-next-line react/display-name
export const BaseInput = forwardRef<HTMLInputElement, IBaseInput>(
    ({lab,error,...props}, ref) => {
    return (
        <div>
            <label className='base-input__label'>{lab}</label>
            <input
                className='base-input__input'
                {...props}
                ref={ref}
            />
            <p className='error'>{error}</p>
        </div>
    );
});
