import { Header } from 'components'
import { useUser } from 'hooks/useUser'
import { AddSubjectPage } from 'pages/AddSubject'
import { AddTeacherPage } from 'pages/AddTeacher'
import { Home } from 'pages/Home'
import { LoginPage } from 'pages/Login'
import NotFoundPage from 'pages/NotFound'
import { ProfilePage } from 'pages/Profile'
import { RegisterPage } from 'pages/Register'
import { SubjectPage } from 'pages/Subject'
import { SubjectsPage } from 'pages/Subjects'
import { TeacherPage } from 'pages/Teacher'
import { TeachersPage } from 'pages/Teachers'
import { UserPage } from 'pages/User'
import { UsersPage } from 'pages/Users'
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

export const router = createBrowserRouter([
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
                element: (
                    <GuestRoute>
                        <LoginPage />
                    </GuestRoute>
                ),
            },
            {
                path: 'cadastrar',
                element: (
                    <GuestRoute>
                        <RegisterPage />
                    </GuestRoute>
                ),
            },
            {
                path: 'perfil',
                element: (
                    <AuthRoute>
                        <ProfilePage />
                    </AuthRoute>
                ),
            },
            {
                path: 'disciplinas',
                children: [
                    {
                        index: true,
                        element: <SubjectsPage />,
                    },
                    {
                        path: ':code',
                        element: <SubjectPage />,
                    },
                    {
                        path: 'adicionar',
                        element: (
                            <AdminRoute>
                                <AddSubjectPage />
                            </AdminRoute>
                        ),
                    },
                ],
            },
            {
                path: 'professores',
                children: [
                    {
                        index: true,
                        element: <TeachersPage />,
                    },
                    {
                        path: ':id',
                        element: <TeacherPage />,
                    },
                    {
                        path: 'adicionar',
                        element: (
                            <AdminRoute>
                                <AddTeacherPage />
                            </AdminRoute>
                        ),
                    },
                ],
            },
            {
                path: 'usuarios',
                children: [
                    {
                        index: true,
                        element: (
                            <AdminRoute>
                                <UsersPage />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: ':id',
                        element: (
                            <AdminRoute>
                                <UserPage />
                            </AdminRoute>
                        ),
                    },
                ],
            },
        ],
        errorElement: <NotFoundPage />,
    },
])
