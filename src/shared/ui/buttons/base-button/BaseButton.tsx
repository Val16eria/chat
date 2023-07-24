import React, { FC } from 'react';

import './BaseButton.scss';

interface IBaseButton {
    btn: string;
}

export const BaseButton: FC<IBaseButton> = ({ btn }) => (
    <div>
        <button className='base-button__container_button' type='submit'>
            {btn}
        </button>
    </div>
);
