import { styled } from 'styled-components'

export const Container = styled.div`
    width: 50vw;
    max-width: 70rem;
    min-width: 10rem;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;

    button {
        margin-top: 2rem;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Title = styled.h1`

    font-size: 4rem;
    line-height: 1.3;
    font-weight: bold;
    width: 100%;
    margin-top: 7rem;
    color: #666;
`

export const Subtitle = styled.h2`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: normal;
    width: 100%;
    margin-top: 3rem;
    color: #666;
`
