import React from 'react'
import UserContext from './userContext.js'
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}