import React from 'react';
import {TextField, Typography} from "@mui/material";
import ButtonForm from '../../../components/button/ButtonForm';
import reg from './RegForm.module.css';

const RegForm = (props: {title: string}) => {
    return (
        <div className={reg.reg__form}>
            <Typography variant="h6" component="div">
                {props.title}
            </Typography>
            <form className={reg.reg__form_form}>
                <div className={reg.reg__container}>
                    <div>
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Почта"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Логин"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Имя"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Фамилия"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Телефон"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Пароль"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                        <TextField
                            className={reg.reg__form_input}
                            variant="standard"
                            label="Пароль (ещё раз)"
                            size="small"
                            margin="normal"
                            fullWidth={true}
                            sx={{
                                marginBottom: 0
                            }}
                        />
                    </div>
                    <div className={reg.reg__btn}>
                        <ButtonForm text="Зарегистрироваться"/>
                        <a href="#">Войти</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegForm;
