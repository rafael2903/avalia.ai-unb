import { createContext, useState } from 'react'
import api from 'services/api'

export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState()

    const login = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        api.defaults.headers.common['Authorization'] = `${user.token}`
    }

    const logout = () => {
        setUser(undefined)
        localStorage.removeItem('user')
        api.defaults.headers.common['Authorization'] = undefined
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
