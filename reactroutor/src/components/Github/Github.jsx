
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/MudassarGill')
      .then(response => {
        if (!response.ok) {
          throw new Error('GitHub user not found')
        }
        return response.json()
      })
      .then(user => {
        setData(user)
      })
      .catch(error => {
        console.error('API Error:', error)
      })
  }, [])

  if (!data) {
    return <p className="text-center">Loading profile...</p>
  }

  return (
    <div className="m-4 bg-gray-500 p-4 text-center text-3xl text-white">
      <h2>GitHub Followers: {data.followers}</h2>

      <img
        className="mx-auto mt-4 w-32 rounded-full"
        src={data.avatar_url}
        alt="GitHub Profile"
      />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/MudassarGill')
    if (!response.ok) {
      throw new Error('GitHub user not found')
    }
    const userData = await response.json()
    return userData
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}