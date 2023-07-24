import React, { FC } from 'react';

interface ITitle {
    title?: string;
}

export const Title: FC<ITitle> = ({ title }) => {
    return (
        <p className='text-big'>{title}</p>
    );
};
