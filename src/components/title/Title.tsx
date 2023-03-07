import React, { FC } from 'react';

interface ITitle {
    title: any;
}

const Title: FC<ITitle> = ({ title }) => {
    return (
        <p>{title}</p>
    );
}

export default Title;
