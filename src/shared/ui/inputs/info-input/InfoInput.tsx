import React, { forwardRef, InputHTMLAttributes } from 'react';

import './InfoInput.scss';

interface IInfoInput extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    error?: string,
}

// eslint-disable-next-line react/display-name
export const InfoInput = forwardRef<HTMLInputElement, IInfoInput>(
    ({title, error, ...props}, ref) => {
    return (
        <div className='flexable-row info-input__container' >
            <div>
                <label className='info-input__label'>{title}</label>
                <p className='error'>{error}</p>
            </div>
            <div>
                <input
                    className='info-input__input'
                    {...props}
                    ref={ref}
                />
            </div>
        </div>
    );
});

