import React, { FC } from 'react';

interface ITitle {
    title: string;
}

const Title: FC<ITitle> = ({ title }) => {
    return (
        <p>{title}</p>
    );
}

export default Title;
