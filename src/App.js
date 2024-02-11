import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";
import AddNewTodo from "./pages/AddNewTodo";


export default function App() {
  const todoList = window.localStorage.getItem("todo_list") ?? [];

  console.log(">>>>", todoList);
  return (
    <>
      <Routes>
        <Route path='/' Component={TodoList}/>
        <Route path='/new' Component={AddNewTodo}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </>
  )
}
