import React, { FC, InputHTMLAttributes} from 'react';
import './InputInfo.css';

interface IInputInfo extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    register?: any,
    error?: string,
    changeDisable?: () => void
}

const InputInfo: FC<IInputInfo> = (
    {
        title,
        changeDisable,
        register,
        error,
        ...props
    }) => {
    return (
        <>
            <div className='inputInfo-container' onDoubleClick={changeDisable}>
                <div>
                    <label>
                        {title}
                    </label>
                    <p className='error-valid'>{error}</p>
                </div>

                <input
                    className='inputInfo-input'
                    {...register}
                    {...props}
                />
            </div>
        </>

    );
}

export default InputInfo;
