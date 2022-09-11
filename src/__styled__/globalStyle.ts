import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.main};
  }
`

export default GlobalStyle
