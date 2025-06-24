import React,{useState,useContext} from 'react'
import UserContext from '../../context/UserContext'
function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    //setUser directly aaya useContext se consider them as global when we put it in useContext

    const handleClick = (e)=>{
        e.preventDefault()
        setUser({username, password})
        //This way data is sent.
    }
  return (
    <div>
        <h2>LogIn</h2>
        <input 
        type="text"
        value = {username}
        placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br />
        <input 
        type="text"
        value = {password}
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login

//Make sure to wrap your component tree inside the UserContextProvider in App.js: