import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../../context/userContext/userContext.js'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const { user, setUser } = useContext(UserContext)
    const data = useLoaderData()
      useEffect(() => {
    setUser({ ...user, avatar_url: data.avatar_url })
  }, [data])


    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ahmedffayaz')
    return response.json()
}