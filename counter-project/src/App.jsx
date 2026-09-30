import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let counter = 0;
  let [count, setCount] = useState(counter);
  const Addvalue = () => {
    setCount(count + 1);
  }
  const Removevalue = () => {
    setCount(count - 1);
    console.log(count);
  }
  
  return (
    <>
    <h1>Hello, Vite + React!</h1>
    <h2>Counter: {count}</h2>
    <button onClick={Addvalue}>ADD VALUE</button>
    <br />
    <button onClick={Removevalue}>REMOVE VALUE</button>
    </>
  )
}

export default App
