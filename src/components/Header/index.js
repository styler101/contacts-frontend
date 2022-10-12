import React from 'react'
import * as S from './styles'
import logo from '../../assets/img/svg/logo.svg'

const Header = () => {
  const[search, setSearch] = React.useState('')
  return (
    <S.Container>
      <img src={logo} alt='mycontacts logo' />
      <S.InputSearchContainer>
        <input type='text' placeholder='Pesquisar pelo nome'  value={search} onChange={(e) => setSearch((e.target.value))}/>
      </S.InputSearchContainer>
    </S.Container>
  )
}

export default Header
