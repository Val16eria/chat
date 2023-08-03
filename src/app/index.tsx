import React, { FC } from 'react';

import { Router } from '../routing';

import './style/style.scss'

export const App: FC = () => {
    return (
        <div>
            <Router />
        </div>
    );
};