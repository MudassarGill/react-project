import React,{usestate} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {removeTodo,editTodo } from '../features/todo/TodoSlice'

function Todoes() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

  return (
    <div className='mt-4'>
      {todos.map((todo) => (
        <div key={todo.id} className='flex justify-between items-center border-b border-gray-300 py-2'>
          <span>{todo.text}</span>
          <div className='flex gap-2'>
            <button 
              onClick={() => dispatch(editTodo(todo.id))} 
              className='bg-yellow-500 text-white p-1 rounded-md'
            >
              Edit
            </button>
            <button 
              onClick={() => dispatch(removeTodo(todo.id))} 
              className='bg-red-500 text-white p-1 rounded-md'
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todoes