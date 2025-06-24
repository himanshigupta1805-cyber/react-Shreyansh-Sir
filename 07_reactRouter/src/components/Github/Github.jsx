import React from 'react'
import {useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect( ()=>{
    //     const response = fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response=>response.json()))
    //     .then((data=>{
    //         setData(data)
    //     }))
    // },[])

  return (
    <>
        <div className = "bg-gray-500 text-center m-4 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img className = "overflow:hidden w-50 h-50" src={data.avatar_url} alt="img" />
        </div>
    </>
  )
}

//Optimized way using loader - LOader allows us to write a callback function for fetching in route itself but it is recommended to make aq callback function in the component itself and then export it to main.jsx
export const githubInfoLoader= async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
