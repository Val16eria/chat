import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Panel } from '../../features/chats/chats/ui';

import './Chat.css';

export const Chat: FC = () => {
    return (
        <Panel>
            <Outlet />
        </Panel>
    );
};
