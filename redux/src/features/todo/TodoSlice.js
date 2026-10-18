import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos: [{
        id: nanoid(),
        text: 'Hello world'
    }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                text: 'Hello world'
            }
            state.todos.push(newTodo)
        },
        removeTodo: () => {},
    }
})