import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {AppContext} from './context'
import Routes from '../../routes/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import SideBar from "../SideBar";
import * as S from './styles'
import GlobalStyles from '../../assets/styles/global'
import ToastContainer from '../Toast/ToastContainer'

import themes from '../../assets/theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
        <AppContext>
          <SideBar/>
            <S.Container>
                <Nav/>
                <Header />
                <Routes />
                <ToastContainer />
            </S.Container>
          <GlobalStyles />
        </AppContext>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
