import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CHAT_RESULT_TYPE, getChatUsers } from '../../shared/api/chat';
import { TChatUsers } from '../../shared/types/type-chat/chat';

const useChatUsers = (): [TChatUsers[]] => {
    const {id} = useParams();

    const [dataUsers, setDataUsers] = useState<TChatUsers[]>([])

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
    }, [id])

    return [dataUsers];
}

export default useChatUsers;
