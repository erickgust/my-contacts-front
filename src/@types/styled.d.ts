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
      gray: {
        900: string
        200: string
        100: string
      }
      danger: {
        light: string
        main: string
        dark: string
      }
    }
  }
}
