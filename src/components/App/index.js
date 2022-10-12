import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from '../../routes/index'
import * as S from './styles'
import GlobalStyles from '../../assets/styles/global'
import themes from '../../assets/theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
          <S.Container>
            <Routes/>
          </S.Container>
          <GlobalStyles />
      </ThemeProvider>
      </BrowserRouter>
  )
}

export default App