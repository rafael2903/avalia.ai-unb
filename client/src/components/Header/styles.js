import Logo from 'assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    padding:  0.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.borderLight};
`

export const LinksContainer = styled.div`
    display: flex;
`

export const AccountContainer = styled.div`
`

export const Link = styled(NavLink)`
    padding: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;

    &.active {
        color: ${({ theme }) => theme.colors.textLinkActive};
        font-weight: bold;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.textLinkActive};
        filter: drop-shadow(0 0 1rem rgba(0, 139, 67, 0.5));
    }
`

export const Image = styled.img.attrs({
    src: Logo,
    alt: 'Logo avalia.ai',
})`
    width: 19rem;
    margin-right: 3rem;
`
