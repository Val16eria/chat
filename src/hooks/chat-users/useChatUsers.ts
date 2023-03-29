import { useEffect, useState } from 'react';

import { CHAT_RESULT_TYPE, getChatUsers } from '../../shared/api/chat';
import { TChatUsers } from '../../shared/types/type-chat/chat';

const useChatUsers = (props: number): [TChatUsers[], (() => void)] => {

    const [dataUsers, setDataUsers] = useState<TChatUsers[]>([])
    const [changeUser, setChangeUser] = useState(true);

    useEffect(() => {
        const handleChatUsers = async () => {
            const chatData = await getChatUsers(props);

            if (chatData.type === CHAT_RESULT_TYPE.SUCCESS) {
                setDataUsers(chatData.data)
            }
            if (chatData.type === CHAT_RESULT_TYPE.FAILURE) {
                console.log('проблемсы')
            }
        }
        handleChatUsers();
    }, [props])

    const changeChatUser = () => {
        setChangeUser(prevState => !prevState)
    };

    return [dataUsers, changeChatUser];
}

export default useChatUsers;
