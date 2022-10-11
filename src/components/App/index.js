import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as S from './styles'
import Header from '../Header'
import ContactsList from '../ContactsList'
import GlobalStyles from '../../assets/styles/global'
import themes from '../../assets/theme'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <S.Container>
        <Header />
        <ContactsList />
      </S.Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
