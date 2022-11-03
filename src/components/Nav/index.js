import React from 'react'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'
import { useApp } from '../App/context'

import * as S from './styles'

function Nav() {
  const { onSideBar, activeSideBar } = useApp()

  return (
    <S.Container activeSideBar={activeSideBar === true ? 1 : 0}>
      {!activeSideBar && <FiMenu size={23} onClick={() => onSideBar(true)} />}
      <S.ThemeWrapper>
        <div>
          <FiSun size={23} color='' />
          <input type='checkbox' />
          <FiMoon size={23} />
        </div>
      </S.ThemeWrapper>
    </S.Container>
  )
}

export default Nav
