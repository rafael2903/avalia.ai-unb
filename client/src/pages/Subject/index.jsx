import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { api, fetcher } from 'services/api'
import { notyf } from 'services/notyf'
import useSWR from 'swr'
import { Container, Title } from './styles'

export const SubjectPage = () => {
    const { code } = useParams()
    const { user } = useUser()
    const disabled = !user?.is_admin

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const {
        data,
        error,
        isLoading: loading,
    } = useSWR({ url: `subjects/${code}` }, fetcher)

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(data)
    }, [data, reset])

    function onSubmit(data) {
        setIsLoading(true)
        api.patch(`/subjects/${code}`, data)
            .then(() => {
                notyf.success('Dados alterados com sucesso!')
            })
            .catch((error) => {
                console.error(error)
                notyf.error(error.response?.data?.message || error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleDelete = () => {
        setIsLoading(true)
        api.delete(`/subjects/${code}`)
            .then(() => {
                notyf.success('Disciplina removido com sucesso!')
                navigate('/disciplinas')
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
    if (error) return <p>Erro ao carregar dados da disciplina</p>

    return (
        <Container>
            <Title>{data?.name}</Title>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    register={register}
                    required
                    name='name'
                    disabled={disabled}
                />
                <Input
                    label='Código'
                    register={register}
                    required
                    name='code'
                    disabled={disabled}
                />
                <Input
                    label='Código do Departamento'
                    register={register}
                    name='department_code'
                    disabled={disabled}
                />

                {data?.teachers?.map((teacher) => (
                    <Link to={`/professores/${teacher.id}`} key={teacher.id}>
                        {teacher.name}
                    </Link>
                ))}

                {!disabled && (
                    <Button value='Alterar dados' isLoading={isLoading} />
                )}
            </form>

            {!disabled && (
                <Button
                    as='button'
                    isLoading={isLoading}
                    onClick={handleDelete}
                    destructive
                >
                    Remover disciplina
                </Button>
            )}
        </Container>
    )
}
