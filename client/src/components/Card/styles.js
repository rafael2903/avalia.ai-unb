import { Link } from "react-router-dom"
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    color: ${({ theme }) => theme.colors.text};
`

export const Title = styled(Link)`
    width: 100%;
    text-align: left;
    font-size: 1.8rem;
    font-weight: bold;

    `

export const Subtitle = styled.p`
    width: 100%;
    text-align: left;
`
