import { Card } from 'components/Card'
import { Input } from 'components/Input'
import throttle from 'lodash.throttle'
import { useCallback, useState } from 'react'
import { fetcher } from 'services/api'
import useSWR from 'swr'
import { Container } from './styles'
import { useUser } from 'hooks/useUser'
import { Link } from 'react-router-dom'
import { Button } from 'components/Button'

export const TeachersPage = () => {
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(
        { url: 'teachers', params: { search } },
        fetcher
    )

    const { user } = useUser()
    const disabled = !user?.is_admin

    const throttledSearch = useCallback(throttle(setSearch, 1000), [])

    const handleSearch = (event) => {
        throttledSearch(event.target.value)
    }

    return (
        <Container>
            <h1>Professores</h1>

            {!disabled && (
                <Button to='/professores/adicionar' as={Link}>Adicionar professor</Button>)
            }

            <Input
                placeholder='Pesquisar professor'
                name='id'
                onChange={handleSearch}
            />

            {error && <p>Erro ao carregar</p>}
            {isLoading && <p>Carregando...</p>}
            {data?.length === 0 && <p>Nenhum professor encontrada</p>}

            {data?.length > 0 &&
                data.map((teacher) => (
                    <Card
                        title={teacher.name}
                        subtitle={teacher.department_name}
                        key={teacher.id}
                        to={`/professores/${teacher.id}`}
                    ></Card>
                ))}
        </Container>
    )
}
