import React, { FC } from 'react';

import './PopupPoint.scss';

interface IPopupPoint {
    Image: any;
    text: string;
    func: (() => Promise<void>) | (() => void);
}

export const PopupPoint: FC<IPopupPoint> = ({ Image, text, func }) => {
    return (
        <div className='flexable-row popup-point__content' onClick={() => func()}>
            <Image />
            <p className='text-middle popup-point__content_text'>{text}</p>
        </div>
    );
}