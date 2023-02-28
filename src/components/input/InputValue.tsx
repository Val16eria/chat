import React, { FC } from 'react';
import './InputValu.css';

interface IInputValue {
    type: string;
    lab: string;
    register: any;
    error: string;
}

const InputValue: FC<IInputValue> = ({ type, lab, register, error }) => {
    console.log(register);
    return (
        <div className="inp-form_container">
            <label>{lab}</label>
            <input
                {...register}
                className="inp-form_input"
                type={type}
            />
            <p>{error}</p>
        </div>
    );
}

export default InputValue;
