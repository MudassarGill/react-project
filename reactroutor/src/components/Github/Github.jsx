import React, { use } from 'react'
import { useState, useEffect } from 'react'

function Github() {
    const [data, setFollowers] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/MudassarGill/followers')
        .then(response => response.json())
        .then(data => {
            setFollowers(data);
        });
    }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl' >Github Followers : {data.length}</div>
  )
}

export default Github