import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'

export const RegisterPage = () => {
    const { register, handleSubmit, control, setValue } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const { setUser, login } = useUser()
    const navigate = useNavigate()

    const id = useWatch({
        control,
        name: 'id',
    })

    useEffect(() => {
        if (id === '') setValue('email', undefined)
        else if (id) setValue('email', id + '@aluno.unb.br')
    }, [id])

    function onSubmit(data) {
        setIsLoading(true)
        api.post('/users', data)
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
            <Title>Criar conta</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label='Nome' register={register} required name='name' placeholder="Digite seu nome"/>
                <Input
                    label='Matrícula UnB'
                    register={register}
                    required
                    name='id'
                    placeholder='Somente números'
                />
                <Input
                    label='Curso'
                    register={register}
                    required
                    name='course'
                    placeholder='Digite seu curso'
                />
                <Input
                    label='Email'
                    register={register}
                    disabled
                    name='email'
                    placeholder='matrícula@aluno.unb.br'
                />
                <Input
                    label='Senha'
                    register={register}
                    required
                    type='password'
                    name='password'
                    placeholder='Digite a senha'
                />
                <Button value='Criar conta' isLoading={isLoading} />
            </form>
        </Container>
    )
}
