import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'

export const AddTeacherPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { handleSubmit, register } = useForm()

    function onSubmit(data) {
        setIsLoading(true)
        api.post('/teachers', data)
            .then(() => {
                notyf.success('Professor adicionado com sucesso!')
                navigate('/professores')
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
            <Title>Adicionar professor</Title>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    register={register}
                    required
                    name='name'
                    placeholder='Digite o nome da professor'
                />
                <Input
                    label='Matrícula'
                    register={register}
                    required
                    name='id'
                    placeholder='Digite a matrícula do(a) professor(a)'
                />
                <Input
                    label='Código do Departamento'
                    register={register}
                    name='department_code'
                    placeholder='Digite o código do departamento    '
                />
                <Button value='Adicionar' isLoading={isLoading} />
            </form>
        </Container>
    )
}
