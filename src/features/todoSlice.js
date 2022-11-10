import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { value: [ ...state.value, action.payload ] };
        },
        clearTodos: (state) => {
            return { value: [] };
        },
        removeTodo: (state, action) => {
            return { value: state.value.slice(action.payload, 1) };
        }
    }
})

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;