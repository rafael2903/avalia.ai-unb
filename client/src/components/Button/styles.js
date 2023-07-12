import styled from 'styled-components'

export const StyledButton = styled.input.attrs({
    type: 'submit',
})`
    background-color: ${({ theme, destructive }) => {
        return destructive ? theme.colors.destructive : theme.colors.secondary
    }};
    width: 100%;
    color: #fff;
    border: none;
    border-radius: 0.7rem;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    margin-top: 2.5rem;
    font-weight: normal;

    &:hover {
        filter: ${({ theme, destructive }) => {
        const color = destructive ? theme.colors.destructive : theme.colors.secondary
        return `drop-shadow(0 0 0.5rem ${color}88)`
    }};
    }
`
