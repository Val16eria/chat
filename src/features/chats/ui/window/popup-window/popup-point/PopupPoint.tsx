import React, { FC } from 'react';

import './PopupPoint.scss';

interface IPopupPoint {
    Image: any;
    alt:string;
    text: string;
    func: (() => Promise<void>) | (() => void);
}

export const PopupPoint: FC<IPopupPoint> = ({ Image, alt, text, func }) => {
    return (
        <div className='flexable-row popup-point__content' onClick={func}>
            {/* <img src={image} alt={alt} /> */}
            <Image />
            <p className='text-middle popup-point__content_text'>{text}</p>
        </div>
    );
}