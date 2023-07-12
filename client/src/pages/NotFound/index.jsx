import { Link, useNavigate, useRouteError } from 'react-router-dom'

import { Container, Subtitle, Title } from './styles'

export default function NotFoundPage() {
    const error = useRouteError()
    const navigate = useNavigate();
    console.error(error)

    return (

        <Container>
            <Title>404</Title>
            <Subtitle>
                Página não encontrada!
            </Subtitle>
            <button to="/" onClick={() => navigate(-1)}>Voltar</button>

        </Container>

    )
}
