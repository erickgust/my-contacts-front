import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: {
        dark: string
        main: string
        light: string
        lighter: string
      }
    }
  }
}
