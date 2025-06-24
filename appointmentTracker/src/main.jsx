import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Doctor from './components/Doctors/Doctors.jsx'
import Appointment from './components/Appointments/Appointments.jsx'
import Layout from './Layout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />    {/*Index route '/' will show <Home /> ✅*/}
        <Route path="home" element = {<Home />}/>
        <Route path="doctor" element = {<Doctor />}/>
        <Route path="appointment" element = {<Appointment />}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
