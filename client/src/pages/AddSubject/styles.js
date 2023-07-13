import { styled } from 'styled-components'

export const Container = styled.div`
    width: 30vw;
    max-width: 70rem;
    min-width: 30rem;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 0 2rem;
    text-align: center;


    span:first-child {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
    }

    span:last-child {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
    }

    button {
        margin-top: 1rem;
    }
`
export const Title = styled.h1`
    font-size: 3rem;
    line-height: 1.3;
    font-weight: bold;
    width: 100%;
    margin-top: 2rem;
    color: #666;
`
