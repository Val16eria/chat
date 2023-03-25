import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CHAT_RESULT_TYPE, getChat } from '../../shared/api/chat';
import { TChat } from '../../shared/types/type-chat/chat';

const useChatPanel = (): [TChat[], () => void] => {

    const [panelUserInfo, setPanelUserInfo] = useState<TChat[]>([]);
    const [changePanel, setChangePanel] = useState(true);

    // поиск по чатам
    const [searchParams, setSearchParams] = useSearchParams('');
    const postQuery = searchParams.get('title') || '';
    // постоянно рендириться
    console.log('PARAMS', postQuery);

    useEffect(() => {

        const handlePanelInfo = async () => {
            // передаю сюда квери
            const panelInfo = await getChat(postQuery);

            if (panelInfo.type === CHAT_RESULT_TYPE.SUCCESS) {
                setPanelUserInfo(panelInfo.data);
            }
        }
        handlePanelInfo();
    }, [changePanel]);

    const changeChatInfo = () => {
        setChangePanel(prevState => !prevState)
    };

    return [panelUserInfo, changeChatInfo];
}

export default useChatPanel;
