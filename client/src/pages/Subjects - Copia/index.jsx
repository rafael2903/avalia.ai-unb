import { Card } from 'components/Card'
import { Input } from 'components/Input'
import throttle from 'lodash.throttle'
import { useCallback, useState } from 'react'
import { fetcher } from 'services/api'
import useSWR from 'swr'
import { Container } from './styles'

export const SubjectsPage = () => {
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(
        { url: 'subjects', params: { search } },
        fetcher
    )

    const throttledSearch = useCallback(throttle(setSearch, 2000), [])

    const handleSearch = (event) => {
        throttledSearch(event.target.value)
    }

    return (
        <Container>
            <h1>Disciplinas</h1>
            <Input
                label='Pesquisar disciplina'
                name='id'
                onChange={handleSearch}
            />

            {error && <p>Erro ao carregar</p>}
            {isLoading && <p>Carregando...</p>}
            {data?.length === 0 && <p>Nenhuma disciplina encontrada</p>}

            {data?.length > 1 &&
                data.map((subject) => (
                    <Card
                        title={`${subject.code} • ${subject.name}`}
                        subtitle={subject.department_name}
                        key={subject.code}
                        to={`/disciplinas/${subject.code}`}
                    ></Card>
                ))}
        </Container>
    )
}
