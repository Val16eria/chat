import { useEffect, useState } from 'react';
import { CHAT_RESULT_TYPE, getChat } from '../../shared/api/chat';
import { TChat } from '../../shared/types/type-chat/chat';

const useChatPanel = (): [TChat[], () => void] => {
    const [panelUserInfo, setPanelUserInfo] = useState<TChat[]>([]);
    const [changePanel, setChangePanel] = useState(true);

    useEffect(() => {
        const handlePanelInfo = async () => {
            const panelInfo = await getChat();

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
