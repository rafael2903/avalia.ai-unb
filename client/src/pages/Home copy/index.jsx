import { Container, Subtitle, Button, Image } from './styles'


export const Home = () => {
    return (
        <Container>
            <Image />
            <Subtitle>
                Achou uma matéria interessante mas não sabe muito sobre ela?
                Está com medo que o professor da turma seja muito difícil?
                No <span>avalia</span><span>.ai</span> você pode ver a opinião de outros alunos sobre as matérias e professores da sua faculdade!
            </Subtitle>
            <Button to="/disciplinas">Começar</Button>
        </Container>
    )
}
