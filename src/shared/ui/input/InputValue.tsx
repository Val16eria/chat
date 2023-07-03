import React, { forwardRef, InputHTMLAttributes } from 'react';

import './InputValue.css';

interface IInputValue extends InputHTMLAttributes<HTMLInputElement>{
    lab: string;
    error: string;
}

export const InputValue = forwardRef<HTMLInputElement, IInputValue>(
    ({lab,error,...props}, ref) => {
    return (
        <div className='inp-form_container'>
            <label>{lab}</label>
            <input
                className='inp-form_input'
                {...props}
                ref={ref}
            />
            <p className='error-valid'>{error}</p>
        </div>
    );
});
