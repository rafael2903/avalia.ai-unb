import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'

export const LoginPage = () => {
    const { register, handleSubmit } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useUser()
    const navigate = useNavigate()

    function onSubmit(data) {
        setIsLoading(true)
        api.post('/auth/login', data)
            .then((response) => {
                login(response.data)
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
            <Title>Entrar na conta</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Matrícula UnB'
                    register={register}
                    required
                    name='id'
                    placeholder='Somente números'
                />
                <Input
                    label='Senha'
                    register={register}
                    required
                    type='password'
                    name='password'
                    placeholder='Digite a senha'
                />
                <Button value='Entrar' isLoading={isLoading} />
            </form>
        </Container>
    )
}
