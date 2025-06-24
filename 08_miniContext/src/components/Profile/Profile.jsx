import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    //Here we are using that data
  if(!user) return <div>Please Login</div>
  return <div>Welcome {user.username}</div>
}

export default Profile

//Make sure to wrap your component tree inside the UserContextProvider in App.js: