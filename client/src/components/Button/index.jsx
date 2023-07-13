import { StyledButton } from './styles'

export const Button = ({ value, isLoading, ...rest }) => {
    return (
        <StyledButton {...rest} value={isLoading ? 'Carregando...' : value}>
        </StyledButton>
    )
}
