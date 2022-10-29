import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from '../../routes/index'
import Header from '../../components/Header'
import * as S from './styles'
import GlobalStyles from '../../assets/styles/global'
import ToastContainer from '../Toast/ToastContainer'
import themes from '../../assets/theme'


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
          <S.Container>
            <Header/>
            <Routes/>
            <ToastContainer/>
          </S.Container>
          <GlobalStyles />

      </ThemeProvider>

      </BrowserRouter>
  )
}

export default App
