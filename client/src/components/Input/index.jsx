import { Container } from './styles'

export const Input = ({ label, register, required, name, ...rest }) => {

    return (
        <Container>
            <input {...register(name || label, { required })} placeholder={label} {...rest}/>
        </Container>
    )
}
