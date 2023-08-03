import React, { 
    FC, 
    PropsWithChildren, 
    useRef 
} from 'react';

import { useOutsideClick } from '../../hooks';

import { Portal } from '../portal';

interface IModal {
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({ children, onClose }) => {

    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, onClose);

    return (
        <Portal>
            <div className='modal-container' >
                <div className='form-container__style' ref={ref}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}