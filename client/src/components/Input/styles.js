import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    input {
        width: 100%;
        padding: 1rem;
        border: 1px solid;
        border-color: ${({ theme }) => theme.colors.border};
        border-radius: 0.5rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
    }

    label {
        display: block;
        text-align: left;
        margin-bottom: 0.8rem;
        font-size: 1.4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.text};

    }

    ::placeholder, :disabled {
        color: ${({ theme }) => theme.colors.textLight};
    }

    input:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${({ theme }) => theme.shadows.secondary};
    }
`
