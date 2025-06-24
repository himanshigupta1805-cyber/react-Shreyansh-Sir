import { useEffect, useState } from 'react'
import Theme from "./components/Themebtn"
import Card from "./components/Card"
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light");
  }

  const darkTheme= ()=>{
    setThemeMode("dark");
  }

  //actual change in Theme
  useEffect(()=>{
    const HTML = document.querySelector('html')
    HTML.classList.remove("light","dark")
    HTML.classList.add(themeMode)
  },[themeMode])


  return (
 <ThemeProvider  value={{themeMode, lightTheme, darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Theme />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
    </div>
 </div>
 </ThemeProvider>   
  )
}

export default App
