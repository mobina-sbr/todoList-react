import React from 'react'
import AppLayout from "../Components/AppLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import styles from "./AddNewTodo.module.css";
import Button from "../Components/Button";

export default function AddNewTodo() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const onSave = () => {
        const todoList = window.localStorage.getItem("todoList")
            ? JSON.parse(window.localStorage.getItem("todoList"))
            : [];

        const newTodo = { title, subtitle };
        const newTodoList = [newTodo, ...todoList];

        window.localStorage.setItem("todoList", JSON.stringify(newTodoList));
        navigate("/");
    };
    return (
        <AppLayout>
            <div className={styles["add-new-todo-page"]}>
                <div>
                    <div className={styles["form-field-wrapper"]}>
                        <Input
                            id="title"
                            label="Title"
                            value={title}
                            onChange={(value) => setTitle(value)}
                        />
                    </div>

                    <div className={styles["form-field-wrapper"]}>
                        <Input
                            id="subtitle"
                            label="Subtitle"
                            value={subtitle}
                            onChange={(value) => setSubtitle(value)}
                        />
                    </div>
                </div>

                <Button onClick={onSave}>Save</Button>
            </div>
        </AppLayout>
    )
}
