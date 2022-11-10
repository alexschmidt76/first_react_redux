import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [ ...state.items, action.payload ] };
        },
        clearTodos: (state) => {
            return { items: [] };
        },
        removeTodo: (state, action) => {
            state.items.splice(action.payload, 1);
        }
    }
})

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;