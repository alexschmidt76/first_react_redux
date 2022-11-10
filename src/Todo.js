import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodos, removeTodo } from "./features/todoSlice";

export default function Todo() {
    const items = useSelector((state) => state.todo.items);
    const dispatch = useDispatch();
    const [ input, setInput ] = useState('');

    const itemList = items.map((item, i) => {
        return <li key={i} onClick={() => dispatch(removeTodo(i))}>{item}</li>
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    };

    return (
        <div style={{ width: 'fit-content', margin: 'auto' }}>
            <h1>ToDo List</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <input type='submit' />
            </form>
            <button onClick={() => dispatch(clearTodos())}>Clear ToDos</button>
            <ul>
                {itemList}
            </ul>
        </div>
    );
};