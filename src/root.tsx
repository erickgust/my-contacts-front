import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './resources/theme/theme'
import { App } from './app'

import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from './components/toast/toast-container'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Sora', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`

function Root () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export { Root }
