import React from 'react'
import Logo from "../assest/download.svg";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Input from "../Components/Input";
import Button from "../Components/Button";

const useStyles = createUseStyles({
    loginPage: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        color: "#fff",
        fontSize: "2.5rem",
        fontWeight: 700,
        flex: 1
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        flex: 1
    }
});

export default function Login() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.loginPage}>
            <div className={classes.logoContainer}>
                <img src={Logo} alt="logo" />
                UpTodo
            </div>

            <div className={classes.formWrapper}>
                <Input label="Username" />
                <Input label="Password" />
                <Button onClick={() => navigate("/")}>Login</Button>
                <Button outlined>Create New Account</Button>
            </div>
        </div>
    )
}
