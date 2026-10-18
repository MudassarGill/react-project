import React,{usestate} from 'react'

function Todoes() {
    const [input, setinput] = useState('')
  return (
    // form data
    <form onSubmit={addTodoHandler} className='flex justify-center items-center gap-2'>
        <input type="text" placeholder='Add Todo' className='border-2 border-gray-400 rounded-md p-2 w-1/2' 
        value={input} onChange={(e) => setinput(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Add</button>


    </form>
  )
}

export default Todoes