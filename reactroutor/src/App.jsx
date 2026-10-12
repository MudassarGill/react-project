import { useState } from 'react'
import Header from './components/./Header/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-orange-500 p-4'>Vite + React</h1>
     <Header />
    </>
  )
}

export default App
