import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import './App.css'
function App() {


  return (
    <>
    {/* UserContextProvider ke andr jo bhi component hum lenge usme hume user and setUser ka direct access milega. */}
    <UserContextProvider>
      <h1>REACT AND CONTEXT - API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
      
    </>
  )
}

export default App
