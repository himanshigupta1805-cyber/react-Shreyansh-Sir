import { useState, useEffect, useCallback, useRef  } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const copyToClipBoard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~`!#@$%^&*()_+-={};:',"

    for(let i=1 ; i<=length ; i++){
      let char = Math.floor((Math.random()*str.length)+1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length , numberAllowed , charAllowed , setPassword ])

  useEffect( ()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

    return (
    <>
      <div className="w-full max-w-md h-40 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center font-bold py-3'>Password Generator</h1>
        <div className ="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type = "text"
          value = {password}
          className = 'outline-none w-full py-1 px-3 bg-white text-gray '
          placeholder='Password'
          ref = {passRef}
          readOnly  //so no one else can change it
          />
          <button 
          onClick = {copyToClipBoard}
          className = 'outline-none text-white bg-blue-700 px-3 oy-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className=" flex text-sm gap-x-2">

            <div className = 'flex item-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={100} 
            value={length} 
            className="cursor-pointer"
            onChange = {(e)=>{setLength(e.target.value)}}
            /><label>Length : {length}</label>
            </div>

            <div className = 'flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            value = {numberAllowed}
            className="cursor-pointer"
            onChange ={()=>{
              setNumberAllowed((prev) => !prev)}}
            />
            <label html>Numbers</label>
            </div>

            <div className = 'flex item-center gap-x-1'> 
            <input 
            type="checkbox" 
            value = {charAllowed}
            className="cursor-pointer"
            onChange = {()=>{setCharAllowed((prev) => (!prev))}}
            /><label>Characters</label>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default App
