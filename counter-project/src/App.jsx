import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let counter = 0;
  
  return (
    <>
    <h1>Hello, Vite + React!</h1>
    <h2>Counter: {counter}</h2>
    <button
    onClick={() => {
      counter++;
      console.log(counter);
    }}>ADD VALUE</button>
    <button
    onClick={() => {
      counter--;
      console.log(counter);
    }}
    >REMOVE VALUE</button>
    </>
  )
}

export default App
