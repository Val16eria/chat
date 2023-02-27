const REQUIRED_FIELD = 'Обязательное для заполнения';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Логин не может содержать русские буквы';
        }
        return true;
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 8) {
            return 'Пароль не может быть меньше 8 символов';
        }
        return true;
    }
}
