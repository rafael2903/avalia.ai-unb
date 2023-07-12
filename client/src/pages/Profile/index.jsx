import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import api from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'

export const ProfilePage = () => {
    const { user, setUser, logout } = useUser()
    const { register, handleSubmit, control, setValue } = useForm({
        defaultValues: user,
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const id = useWatch({
        control,
        name: 'id',
    })

    useEffect(() => {
        setValue('email', id + '@aluno.unb.br')
    }, [id])

    function onSubmit(data) {
        setIsLoading(true)
        api.patch(`/users/${user.id}`, data)
            .then((response) => {
                setUser(response.data)
                localStorage.setItem('user', JSON.stringify(response.data))
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
        api.delete(`/users/${user.id}`)
            .then(() => {
                logout()
                notyf.success('Conta apagada com sucesso!')
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
                notyf.error(error.response?.data?.message || error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <Container>
            <Title>Meu perfil</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label='Nome' register={register} required name='name' />
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
                />
                <Input
                    label='Email'
                    register={register}
                    disabled
                    placeholder='matrícula@aluno.unb.br'
                    name='email'
                />
                <Input
                    label='Nova senha'
                    register={register}
                    type='password'
                    name='password'
                />
                <Button value='Alterar dados' isLoading={isLoading} />
            </form>
                <Button
                    as='button'
                    isLoading={isLoading}
                    onClick={handleDelete}
                    destructive
                >
                    Apagar conta
                </Button>
        </Container>
    )
}
