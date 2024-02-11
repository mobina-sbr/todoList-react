import React from 'react'
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    inputWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
    },
    inputLable: {
        color: "#FFF",
        textAlign: "start",
        paddingInline: "0.25rem"
    },
    input: {
        padding: "1rem",
        fontSize: "1.25rem",
        borderRadius: "0.25rem",
        border: "1px solid #1D1D1D",
        background: "#1D1D1D",
        outline: "none",
        color: "#FFF",

        "&:focus": {
            border: "1px solid #363636"
        }
    }
});

export default function Input({ id, value, onChange, label, type = "text" }) {
    const classes = useStyles();
    return (
        <div className={classes.inputWrapper}>
            <label htmlFor={id} className={classes.inputLable}>
                {label}
            </label>

            <input
                maxLength={30}
                id={id}
                className={classes.input}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}
