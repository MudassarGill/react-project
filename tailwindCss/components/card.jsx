import React from 'react'

const Card = () => {
  return (
    <div className="bg-gradient-to-r from-black-500 to-orange-500 flex  w-full items-center">
        <div className="flex items-center gap-2">
          <img src={reactLogo} className="w-10 h-10" alt="React logo" />
        </div>
       <ul className="flex gap-4 text-white text-lg font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
  )
}

export default Card