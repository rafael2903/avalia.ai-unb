import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'
import { notyf } from 'services/notyf'
import { Container, Title } from './styles'

export const AddSubjectPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { handleSubmit, register } = useForm()

    function onSubmit(data) {
        setIsLoading(true)
        api.post('/subjects', data)
            .then(() => {
                notyf.success('Disciplina adicionada com sucesso!')
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

    return (
        <Container>
            <Title>Adicionar disciplina</Title>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    register={register}
                    required
                    name='name'
                    placeholder='Digite o nome da disciplina'
                />
                <Input
                    label='Código'
                    register={register}
                    required
                    name='code'
                    placeholder='Digite o código da disciplina'
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
