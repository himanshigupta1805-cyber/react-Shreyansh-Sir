import React from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children})=>{
    // Wrap the root of your app (or components that need access) with <UserContextProvider>...</UserContextProvider> in your App.js.
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
    

export default UserContextProvider


// This component wraps children (e.g., pages) and provides access to user and setUser state.

// useState(null) initializes user as null (i.e., not logged in).

// value={{ user, setUser }} makes both readable (user) and writable (setUser) globally.