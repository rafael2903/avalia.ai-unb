import { styled } from 'styled-components'
import { NavLink  } from 'react-router-dom'
import Logo from 'assets/logo.svg'

export const Container = styled.div`
    width: 50vw;
    max-width: 70rem;
    min-width: 10rem;
    margin: 0 auto;
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
`

export const Subtitle = styled.h2`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: normal;
    width: 100%;
    margin-top: 3rem;
    color: #666;
`

export const Button = styled(NavLink)`
    background-color:${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    margin-top: 6rem;
    font-weight: normal;

    &:hover {
        filter: drop-shadow(0 0 0.5rem #008B43);
    }
`

export const Image = styled.img.attrs({
    src: Logo,
    alt: 'Logo avalia.ai'
})`
    margin-top: 8rem;
    width: 100%;
`
