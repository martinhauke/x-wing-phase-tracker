import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './__styled__/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './__styled__/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
