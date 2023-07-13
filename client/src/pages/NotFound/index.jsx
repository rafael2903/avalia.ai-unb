import { Link, useRouteError } from 'react-router-dom'

import { Container, Subtitle, Title } from './styles'

export default function NotFoundPage() {
    const error = useRouteError()
    console.error(error)

    return (

        <Container>
            <Title>404</Title>
            <Subtitle>
                Página não encontrada!
            </Subtitle>
            <p>{error?.message}</p>
            <Link to="/">Ir para página inicial</Link>

        </Container>

    )
}
