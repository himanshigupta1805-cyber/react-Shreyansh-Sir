import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//Instead of App i want to print my own defined OBJECT
const anotherUser = "Shreyansh"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click to visit google',
  anotherUser
)

//This is a fixed way pehle type fir key fir ref fir props 
createRoot(document.getElementById('root')).render(
    <App />
    
  
)
//Here we cannot write script in object directly final outcome as it is jaata h thats why {} isme evaluated expression he jaata h