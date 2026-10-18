import { useState } from 'react'
import Todoes from './components/Todoes'
import AddTodo from './components/AddTodo'
import {Provider} from 'react-redux'
import {store} from './app/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Vite + React</h1>
      <AddTodo />
      <Todoes />
    </>
  )
}

export default App
