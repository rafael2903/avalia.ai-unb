import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;

        color-scheme: light dark;
        color: #ccc;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
        list-style: none;
        background: transparent;
        color: inherit;
        line-height: inherit;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    #root {
        display: flex;
        place-items: center;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
    }

    a {
        font-weight: 500;
        text-decoration: inherit;
    }

    html {
        font-size: 62.5%; /* 10px */
    }

    body {
        font-size: 1.6rem; /* 16px */
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        box-sizing: border-box;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    a {
        transition: all 0.2s ease-in-out;
    }

    button, input[type="submit"] {
        cursor: pointer;
    }


`
