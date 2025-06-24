import {React , useEffect, useState}from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import data from '/workspaces/REACT.JS/appointmentTracker/src/data/appointment.json'
export default function Home() {
  const [date, setDate] = useState(new Date());
  const [appointments,setAppointments] = useState([])

  useEffect(()=>{
    setAppointments(data.appointments);
  },[])
  return (
    <div className="flex items-center justify-between p-4 h-150 bg-gray-50">
      <div className= "flex flex-col border-b-blue-200 bg-slate-300 hover:-translate-y-1 rounded-lg w-165 h-125 items-center">
        <h1 className="text-3xl font-bold text-slate-700 mb-6 mt-4">Your Appointment Calendar</h1>
        <div className="bg-white rounded-xl shadow p-4">
        <Calendar onChange={setDate} value={date} />
        </div>
        <p className="mt-4 text-gray-700 mx-19 mb-2">
          Selected date: <span className="font-semibold">{date.toDateString()}</span>
        </p>
      </div>
      <div>
        <div className= "flex flex-col  border-b-blue-200 bg-slate-300 hover:-translate-y-1 rounded-lg w-200 h-125 items-center px-5 ">
          <h1 className="text-3xl font-bold text-slate-700 mb-6 mt-4 ">Upcoming Appointments</h1>
          <ul className="mt-5 shadow-xl bg-white rounded-lg ">
            {
              appointments.map((a) => (
                <li className="flex border-style:double border-2 p-3 rounded-xl shadow-sm gap-2 mt-3 mb-3 bg-blue-100 hover:-transalte-y-1" key={a.id}>
                  <span className='text-black font-semibold'>{a.patientName}</span> - <span className="font-semibold ">"{a.doctorName}"</span> on <span className="bg-amber-300 rounded border px-0.5">{a.date}</span> at <span>{a.time}</span>
                </li>
              ))
            }
          </ul>
          <h1 className="mt-7 font-bold text-4xl italic font-sans text-center underline decoration-4 text-slate-700">“Bringing <span >care</span> to your calendar.”</h1>
        </div>
        
      </div>
    </div>
  );
}

