import React, { useMemo } from 'react'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'
import { useApp } from '../App/context'

import * as S from './styles'

function Nav() {
  const { onSideBar, activeSideBar, handleSwitchTheme, theme } = useApp()

  const currentColor = useMemo(() => {
    return theme === 'dark' ? '#fff' : '#000'
  }, [theme])
  console.log(currentColor)
  return (
    <S.Container activeSideBar={activeSideBar === true ? 1 : 0}>
      {!activeSideBar && (
        <FiMenu
          size={23}
          onClick={() => onSideBar(true)}
          color={currentColor}
        />
      )}
      <S.ThemeWrapper>
        <div>
          <FiSun size={23} color={currentColor} />
          <input value={theme} type='checkbox' onChange={handleSwitchTheme} />
          <FiMoon size={23} color={currentColor} />
        </div>
      </S.ThemeWrapper>
    </S.Container>
  )
}

export default Nav
