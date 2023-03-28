import React, { ChangeEvent, useEffect, useState } from 'react';

import { CHAT_RESULT_TYPE, getChat } from '../../shared/api/chat';
import { TChat } from '../../shared/types/type-chat/chat';

const useChatPanel = (): [TChat[], (() => void), string, ((e: React.ChangeEvent<HTMLInputElement>) => void)] => {

    const [panelUserInfo, setPanelUserInfo] = useState<TChat[]>([]);
    const [changePanel, setChangePanel] = useState(true);

    // поиск по чатам
    const [search, setSearch] = useState('');

    useEffect(() => {

        const handlePanelInfo = async () => {
            // передаю сюда квери
            const panelInfo = await getChat(search);

            if (panelInfo.type === CHAT_RESULT_TYPE.SUCCESS) {
                setPanelUserInfo(panelInfo.data);
            }
        }
        handlePanelInfo();
    }, [changePanel]);

    const changeChatInfo = () => {
        setChangePanel(prevState => !prevState)
    };

    const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return [panelUserInfo, changeChatInfo, search, changeSearch];
}

export default useChatPanel;
