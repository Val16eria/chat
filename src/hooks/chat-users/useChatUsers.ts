import { useEffect, useState } from 'react';

import { CHAT_RESULT_TYPE, getChatUsers } from '../../shared/api/chat';
import { TChatUsers } from '../../shared/types/type-chat/chat';

const useChatUsers = (id: number): [TChatUsers[], () => void] => {

    const [isAction, setAction] = useState(false);
    const [dataUsers, setDataUsers] = useState<TChatUsers[]>([]);

    useEffect(() => {
        const handleChatUsers = async () => {
            const chatData = await getChatUsers(id);

            if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
                setDataUsers(chatData.data)
            }
            if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
                console.log('проблемсы')
            }
        }
        handleChatUsers();
    }, [id, isAction])

    const changeChatUser = () => {
        setAction(prevState => !prevState)
    };

    return [dataUsers, changeChatUser];
}

export default useChatUsers;
