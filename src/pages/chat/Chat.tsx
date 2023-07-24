import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { PanelContent } from '../../features/chats/ui';

export const Chat: FC = () => {
    return (
        <PanelContent>
            <Outlet />
        </PanelContent>
    );
};
