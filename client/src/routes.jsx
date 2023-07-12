import { Header } from 'components'
import { useUser } from 'hooks/useUser'
import { Home } from 'pages/Home'
import { LoginPage } from 'pages/Login'
import NotFoundPage from 'pages/NotFound'
import { ProfilePage } from 'pages/Profile'
import { RegisterPage } from 'pages/Register'
import { Navigate, createBrowserRouter } from 'react-router-dom'


const AuthRoute = ({ children }) => {
    const { user } = useUser()
    if (!user) {
        return <Navigate to='/entrar' />
    }
    return children
}

const GuestRoute = ({ children }) => {
    const { user } = useUser()
    if (user) {
        return <Navigate to='/' />
    }
    return children
}

const AdminRoute = ({ children }) => {
    const { user } = useUser()
    if (!user || !user.is_admin) {
        return <Navigate to='/' />
    }
    return children
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'entrar',
                element: <GuestRoute><LoginPage /></GuestRoute>,
            },
            {
                path: 'cadastrar',
                element: <GuestRoute><RegisterPage /></GuestRoute>,
            },
            {
                path: 'perfil',
                element: <AuthRoute><ProfilePage /></AuthRoute>,
            }
        ],
        errorElement: <NotFoundPage />,
    },
])

export { router }
