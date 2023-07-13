import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { api, fetcher } from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'
import useSWR from 'swr'

export const UserPage = () => {
    const { id } = useParams()
    const { user } = useUser()
    const disabled = !user?.is_admin

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const {
        data,
        error,
        isLoading: loading,
    } = useSWR({ url: `users/${id}` }, fetcher)

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(data)
    }, [data, reset])

    const onSubmit = () => {
        setIsLoading(true)
        api.delete(`/users/${id}`)
            .then(() => {
                notyf.success('Usuário removido com sucesso!')
                navigate('/usuarios')
            })
            .catch((error) => {
                console.error(error)
                notyf.error(error.response?.data?.message || error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar dados do(a) usuario(a)</p>

    return (
        <Container>
            <Title>{data?.name || id}</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    register={register}
                    required
                    name='name'
                    disabled
                />
                <Input
                    label='Matrícula UnB'
                    register={register}
                    required
                    name='id'
                    disabled
                />
                <Input
                    label='Curso'
                    register={register}
                    required
                    name='course'
                    disabled
                />
                <Input
                    label='Email'
                    register={register}
                    disabled
                    placeholder='matrícula@aluno.unb.br'
                    name='email'
                />
                <Button
                    value='Apagar usuário'
                    isLoading={isLoading}
                    destructive
                />
            </form>
        </Container>
    )
}
