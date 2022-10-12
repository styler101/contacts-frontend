import React from 'react'
import * as S from './styles'
import logo from '../../assets/img/svg/logo.svg'

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt='My Contacts logo' />
    </S.Container>
  )
}

export default Header
