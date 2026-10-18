
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/TodoSlice'

function Todoes() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const [editingId, setEditingId] = useState(null)
    const [editedText, setEditedText] = useState('')

    const handleEdit = (todo) => {
        setEditingId(todo.id)
        setEditedText(todo.text)
    }

    const handleSave = (id) => {
        dispatch(editTodo({
            id: id,
            text: editedText
        }))

        setEditingId(null)
        setEditedText('')
    }

    return (
        <div className="mt-4">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex justify-between items-center border-b border-gray-300 py-2 gap-2"
                >
                    {editingId === todo.id ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className="border border-gray-400 rounded-md p-1 flex-1"
                        />
                    ) : (
                        <span>{todo.text}</span>
                    )}

                    <div className="flex gap-2">
                        {editingId === todo.id ? (
                            <button
                                onClick={() => handleSave(todo.id)}
                                className="bg-green-500 text-white p-1 rounded-md"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEdit(todo)}
                                className="bg-yellow-500 text-white p-1 rounded-md"
                            >
                                Edit
                            </button>
                        )}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white p-1 rounded-md"
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
