import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import themes from './assets/theme/index'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <h1> MyContacts</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
