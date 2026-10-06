import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(color) {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="bg-blue-500 h-10 w-200 flex justify-between rounded-lg">
        <button onClick={() => handleClick('blue')} className='bg-blue-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Blue</button>
        <button onClick={() => handleClick('green')} className='bg-green-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Green</button>
        <button onClick={() => handleClick('red')} className='bg-red-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Red</button>
        <button onClick={() => handleClick('yellow')} className='bg-yellow-500 w-20 h-10 flex items-center justify-center rounded border border-black'>Yellow</button>
        <button onClick={() => handleClick('black')} className='bg-black w-20 h-10 flex items-center justify-center rounded border border-white'>Black</button>
        <button onClick={() => handleClick('white')} className='bg-white w-20 h-10 flex items-center justify-center rounded border border-black'>White</button> 

      </div>
    </>
  )
}

export default App
