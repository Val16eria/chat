import React, { 
    FC, 
    FormEvent, 
    useState 
} from 'react';
import { useParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

import { FormContainer, Modal } from '../../../../../../shared/ui';
import { addUserToChat, deleteUserToChat } from '../../../../../../shared/api';
import { userSearch } from '../../../../../../shared/api/users';

import './ModalChatUser.scss';

interface IModalChatUser {
    close: () => void;
    title: string;
    btn: string;
}

interface IUserSelect {
    label: string;
    value: number;
}

export const ModalChatUser: FC<IModalChatUser> = (
{ 
    close, 
    title, 
    btn 
}) => {

    const { id } = useParams();
    const [ selectValue, setSelectValue ] = useState<IUserSelect>({} as IUserSelect);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (id) {
            if (btn === 'Добавить') {
                await addUserToChat({ users: [selectValue.value], chatId: id })
                .then(() => close());
            }
            else if (btn === 'Удалить') {
                await deleteUserToChat({ users: [selectValue.value], chatId: id })
                .then(() => close());
            }
        }
    }

    const changeSelect = (e: any) => {
        setSelectValue(e);
    }

    const filterUsers = async (inputValue: string) => {
        const data = await userSearch({ login: inputValue });
        return data.map((item) => ({
            label: item.login,
            value: item.id
        }));
    }

    return (
        <Modal onClose={close}>
            <FormContainer
                title={title}
                btn={btn}
                onSubmit={onSubmit}
            >
                <div className='modal-chat-user__select'>
                    <AsyncSelect
                        loadOptions={filterUsers} 
                        onChange={changeSelect}
                    />
                </div>
            </FormContainer>
        </Modal>
    );
}
