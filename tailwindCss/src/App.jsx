import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 h-10 w-200 flex justify-between rounded-lg">
        <button className='bg-blue-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Blue</button>
        <button className='bg-green-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Green</button>
        <button className='bg-red-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Red</button>
        <button className='bg-yellow-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Yellow</button>
        <button className='bg-black w-20 h-10 flex items-center justify-center rounded border border-white'>Black</button>
        <button className='bg-white w-20 h-10 flex items-center justify-center rounded border border-black'>White</button> 

      </div>
    </>
  )
}

export default App
