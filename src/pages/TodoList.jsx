import React from 'react'
// import NoRecord from "../assets/no-record.svg";
import { useNavigate } from "react-router-dom";
import AppLayout from "../Components/AppLayout";
import Card from "../Components/Card";
import Button from "../Components/Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    todoListPage: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    todoListWrapper: {
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        flex: 1
    },
    imageWrapper: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
export default function TodoList() {
    const classes = useStyles();
    const nagivate = useNavigate();

    const todoList = window.localStorage.getItem("todoList")
        ? JSON.parse(window.localStorage.getItem("todoList"))
        : [];
    return (
        <AppLayout>
            <div className={classes.todoListPage}>
                <div className={classes.todoListWrapper}>
                    {todoList.length ? (
                        todoList.map((item) => (
                            <Card title={item.title} subtitle={item.subtitle} />
                        ))
                    ) : (
                        <div className={classes.imageWrapper}>
                            {/* <img src={NoRecord} alt="no record" /> */}
                        </div>
                    )}
                </div>

                <Button onClick={() => nagivate("/new")}>Add New Todo</Button>
            </div>
        </AppLayout>
    )
}
