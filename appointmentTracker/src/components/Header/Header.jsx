import React from 'react'
import {Link , NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <>
    <header className="shadow sticky z-50 top-0 bg-white">
        <nav className="bg-white border-b border-sky-100 px-4 lg:px-6 py-2.5">
            {/* For Logo and Name */}
            <div className="flex justify-between items-center mx-auto max-w-screen-xl w-full">
                <Link to="/" className="flex item-center gap-2"> 
                        <img
                            src="https://scontent.frpr1-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNxx_uO8J7OKInH9SmiL2CzAwqUDV-hlWP7GHI3suMCocnXvM3oXqucnN30Bfvp_Qn93zqUDowlTsn6mwzcZl7GMBvMckHt7M9I8IQqkoqZa6E17TvrpUuLz6K7XyD6ZY23iULJaj3uulWGqZ2Z8RNbuaDouw.jpeg?stp=s1440x1440&_nc_ht=scontent.frpr1-2.fna.fbcdn.net&_nc_gid=C14EN287UoJn1r0jKChJ0Q&_nc_cat=104&_nc_oc=AdlZIjp5a12az258d95elp9I7jOz61LodQ6YM5jETj7JkAQMyRw26xV1jWbsNppFZVtWyybVCqDkB_6VxLtZisdx&ccb=9-4&oh=00_AfNT0OH0fk4nKfqb_9eyrmFd3tDX6Ub31AOf7_GuKD31Lw&oe=68584AFB&_nc_sid=5b3566"
                            className="rounded-full border-b-sky-300 border-5 w-15 h-15"
                            alt="Logo"
                        />
                            <p class="text-3xl font-bold text-slate-700 font-sans underline decoration-sky-500 mt-3">DocTime</p>
                    </Link>
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to = "/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-sky-500' : 'text-slate-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-500 lg:p-0 text-center`
                                    }
                                >
                                    Home
                            </NavLink></li>
                        <li>
                            <NavLink
                                to = "/doctor"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-sky-500' : 'text-slate-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-500 lg:p-0 text-center`
                                    }
                                >
                                    Doctor
                            </NavLink></li>
                        <li>
                            <NavLink
                                to = "/appointment"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-sky-500' : 'text-slate-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-500 lg:p-0 text-center`
                                    }
                                >
                                    Appointment
                            </NavLink></li>
                        <li>
                            <NavLink
                                to = "/profile"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-sky-500' : 'text-slate-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-sky-500 lg:p-0 text-center`
                                    }
                                >
                                    Profile
                            </NavLink></li>
                    </ul>
                        
            </div>
        </nav>
        

    </header>
    
    </>
  )
}
