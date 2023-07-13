import { Card } from 'components/Card'
import { Input } from 'components/Input'
import throttle from 'lodash.throttle'
import { useCallback, useState } from 'react'
import { fetcher } from 'services/api'
import useSWR from 'swr'
import { Container } from './styles'

export const UsersPage = () => {
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(
        { url: 'users', params: { search } },
        fetcher
    )

    const throttledSearch = useCallback(throttle(setSearch, 1000), [])

    const handleSearch = (event) => {
        throttledSearch(event.target.value)
    }

    return (
        <Container>
            <h1>Usuários</h1>

            <Input
                placeholder='Pesquisar usuário'
                name='id'
                onChange={handleSearch}
            />

            {error && <p>Erro ao carregar</p>}
            {isLoading && <p>Carregando...</p>}
            {data?.length === 0 && <p>Nenhum usuário encontrado</p>}

            {data?.length > 0 &&
                data.map((user) => (
                    <Card
                        title={`${user.name} • ${user.id}`}
                        subtitle={user.course}
                        key={user.id}
                        to={`/usuarios/${user.id}`}
                    ></Card>
                ))}
        </Container>
    )
}
