import { useUser } from 'hooks/useUser.js'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import api from 'services/api.js'
import { router } from './routes.jsx'

export const App = () => {
    const { setUser } = useUser()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
            const { token } = user
            api.defaults.headers.common['Authorization'] = `${token}`
        }
    }, [setUser])

    return <RouterProvider router={router} />
}
