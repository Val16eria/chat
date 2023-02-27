import React from 'react';
import {TextField, Typography} from "@mui/material";
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "./validation";
import auth from './AuthForm.module.css';
import ButtonForm from "../../../components/button/ButtonForm";

interface ISignInForm {
    login: string;
    password: string;
}

const AuthForm = (props: {title: string}) => {
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({control});
    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
    return (
        <div className={auth.auth__form}>
            <Typography variant="h6" component="div">
                {props.title}
            </Typography>
            <form className={auth.auth__form_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={auth.auth__container}>
                    <div>
                        <Controller
                            control={control}
                            name="login"
                            rules={loginValidation}
                            render={({field}) => (
                                <TextField
                                    className={auth.auth__form_input}
                                    variant="standard"
                                    label="Логин"
                                    size="small"
                                    margin="normal"
                                    fullWidth={true}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.login?.message}
                                    helperText={errors.login?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={passwordValidation}
                            render={({field}) => (
                                <TextField
                                    className={auth.auth__form_input}
                                    variant="standard"
                                    label="Пароль"
                                    type="password"
                                    size="small"
                                    margin="normal"
                                    fullWidth={true}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.password?.message}
                                    helperText={errors.password?.message}
                                />
                            )}
                        />
                    </div>
                    <div className={auth.auth__btn}>
                        <ButtonForm text="Авторизоваться"/>
                        <a href="#">Нет аккаунта?</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
