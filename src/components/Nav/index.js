import React from 'react';
import { FiMenu } from 'react-icons/fi'
import { useApp } from '../App/context'
import * as S from './styles'

function Nav(){
  const { onSideBar, activeSideBar } = useApp()
  return(
    <S.Container activeSideBar={activeSideBar}>
      { !activeSideBar && <FiMenu size={23} onClick={() => onSideBar(true)}/>}
        <div>
            <span> Light</span>
            <button> Trocar Tema </button>
            <span> Dark </span>
        </div>
    </S.Container>
  )
}

export default Nav;
