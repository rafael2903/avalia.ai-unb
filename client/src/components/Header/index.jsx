import { useUser } from 'hooks/useUser'
import { Outlet } from 'react-router-dom'
import {
    AccountContainer,
    Container,
    Image,
    Link,
    LinksContainer,
} from './styles'

export const Header = () => {
    const { user, logout } = useUser()

    return (
        <>
            <Container>
                <LinksContainer>
                    <Image />
                    <Link to='/'>Pagina Inicial</Link>
                    <Link to='/disciplinas'>Disciplinas</Link>
                    <Link to='/professores'>Professores</Link>
                </LinksContainer>

                <AccountContainer>
                    {user && user.is_admin && (
                        <Link to='/usuarios'>Administração</Link>
                    )}
                    {user ? (
                        <>
                            <Link to='/perfil'>Meu Perfil</Link>
                            <Link as='button' to='/sair' onClick={logout}>
                                Sair
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to='/entrar'>Entrar</Link>
                            <Link to='/cadastrar'>Cadastrar</Link>
                        </>
                    )}
                </AccountContainer>
            </Container>
            <Outlet />
        </>
    )
}
