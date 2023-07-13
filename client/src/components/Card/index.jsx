import { Container, Title, Subtitle } from './styles'

export const Card = ({ title, subtitle, to }) => {

    return (
        <Container>
            <Title to={to}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}
