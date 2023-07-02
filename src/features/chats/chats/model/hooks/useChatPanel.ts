import React, { ChangeEvent, useEffect, useState } from 'react';

import { AnyARecord } from 'dns';

export const useChatPanel = (): [AnyARecord[], (() => void), string, ((e: React.ChangeEvent<HTMLInputElement>) => void)] => {

    const [panelUserInfo, setPanelUserInfo] = useState<any[]>([]);
    const [changePanel, setChangePanel] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const handlePanelInfo = async () => {
            // const panelInfo = await getChat(search);
        }

        handlePanelInfo();
    }, [changePanel]); // panelUserInfo

    const changeChatInfo = () => {
        setChangePanel(prevState => !prevState)
    };

    const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return [panelUserInfo, changeChatInfo, search, changeSearch];
};
