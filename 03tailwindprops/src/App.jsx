import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Shreyansh",
    Arr : [1,2,4]
  }
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 mb-4' >Tailwind Test</h1>
      < Card />
       <  Card channel = "chai aur code" />  {/*<!--/* Card is now accesible as a function imported by other folder*/}
    </>
  )
}

export default App

//Now this code for card is jsx code and we can add it as component also like what if we want to add two cards then common approach is make a function and call it waisa he kuch.
// Use of props - maanlo do card print kie but now we want diff info on each card to achieve that we use props..refer card.jsx
// as i gave channel toh doosre card ke prop object wo key value pair mein set ho gaya to pass object or array into props forst store them in some variable and then pass using {}