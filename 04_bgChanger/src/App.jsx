import { useState } from "react"
function App() {
  const [color, setColor] = useState("black")

  
  return (
    <div className = "w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
          <div className = "fixed flex flex-wrap justify-center gap-3 bottom-12 bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "red"}} 
            onClick = {()=>setColor("red")}>RED</button>

            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "green"}}
            onClick = {()=>setColor("green")}>green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "yellow"}}
            onClick = {()=>setColor("yellow")}>yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "blue"}}
            onClick = {()=>setColor("blue")}>blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-black"
            style={{backgroundColor: "white"}}
            onClick = {()=>setColor("white")}>white</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "purple"}}
            onClick = {()=>setColor("purple")}>purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor: "grey"}}
            onClick = {()=>setColor("grey")}>grey</button>
          </div>  
      </div>

    </div>

  )
}

export default App

//handleClick krke function banake fir onClick mei pass krenge toh ek dikkkat h onClick always wants a callback Function ye syntax h toh jab hum function denge toh fir hum parameter nahi de payenge islie hume whi pr function define krna pdega