// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      affirm: string
      affirmLight: string
      light: string
    }

    spaces: {
      large: string
      medium: string
      small: string
    }

    nextButtonMaxHeight: string
    contentWidth: string
  }
}
