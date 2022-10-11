import React from 'react'
import * as S from './styles'
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt='mycontacts logo' />
      <S.InputSearchContainer>
        <input type='text' placeholder='Pesquisar pelo nome' />
      </S.InputSearchContainer>
    </S.Container>
  )
}

export default Header
