import React, { FC } from 'react';
import './InputValue.css';

interface IInputValue {
    type: string;
    lab: string;
    register: any;
    error: string;
}

const InputValue: FC<IInputValue> = ({ type, lab, register, error }) => {
    return (
        <div className='inp-form_container'>
            <label>{lab}</label>
            <input
                {...register}
                className='inp-form_input'
                type={type}
            />
            <p>{error}</p>
        </div>
    );
}

export default InputValue;
