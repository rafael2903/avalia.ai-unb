import { App } from 'App'
import UserContextProvider from 'contexts/UserContext.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme.js'
import { GlobalStyle } from './GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </UserContextProvider>
    </React.StrictMode>
)
