import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './resources/theme/theme'
import { App } from './app'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Sora', sans-serif;
    background: ${({ theme }) => theme.backgroundColor};
  }

  button {
    cursor: pointer;
  }
`

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
