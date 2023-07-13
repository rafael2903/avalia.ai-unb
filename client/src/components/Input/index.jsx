import { Container } from './styles'

export const Input = ({ label, register, required, name, ...rest }) => {
    return (
        <Container>
            {label?.length && <label>{label}</label>}
            <input
                {...(register && register(name || label, { required }))}
                {...rest}
            />
    </Container>
    )
}
