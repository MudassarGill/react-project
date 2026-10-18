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
        addTodo: () => {},
        removeTodo: () => {},
    }
})