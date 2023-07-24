import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Panel } from '../../features/chats/ui';

export const Chat: FC = () => {
    return (
        <Panel>
            <Outlet />
        </Panel>
    );
};
