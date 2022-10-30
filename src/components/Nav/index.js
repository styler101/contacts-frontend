import React from 'react';
import { FiMenu } from 'react-icons/fi'
import * as S from './styles'

function Nav(){
  return(
    <S.Container>
        <FiMenu size={20}/>
        <div>
            <span> Light</span>
            <button> Trocar Tema </button>
            <span> Dark </span>
        </div>
    </S.Container>
  )
}

export default Nav;
