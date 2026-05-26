import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // using usestate hook - pass two agrument one var and other one calls that var 
  // useSTate mei koi bhi default value de skte instead of 15 like true false string kuch hhi
  let [counter, setCounter] = useState(15)
  let [msg, setMsg] = useState("")
  //isne kaam let counter wala he kia h bas iska state change ho skta h on UI toh page mei jaha kahi bhi counter use hua h har jgh ek saath changes aajayenge 
  //let counter =15;
  const AddValue = ()=>{
    // counter = counter+1 aise nahi hoga
    setCounter(counter+1)
    setMsg("")
  }

  const PrintMsg = ()=>{
    setMsg("Can not go to negatives")
  }
  const RemoveValue = ()=>{
    if(counter >0) {
      setCounter(counter-1);
      setMsg("")
    }
    else setMsg("Cannot go to negatives")
  }
  return (
    <>
      <h1>Create Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={AddValue}>Increase counter : {counter}</button>
      <br />
      <button onClick={RemoveValue}>Decreaese counter : {counter}</button>
      <p>{msg}</p>
    </>
  )
}

export default App


//Without Hooks, Value change toh ho rhi h but UI updation nahi ho rha h i.e., main screen pr changed vale nahi dikh rhi h