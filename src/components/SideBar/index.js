import React from 'react';
import ReactDOM from 'react-dom'

import { FiUser, FiX, FiFile } from 'react-icons/fi'
import * as S from './styles'
import {useApp} from "../App/context";
import useClickOutSide from "../../hooks/UseClickOutSide";

function SideBar(){
  const { activeSideBar, onSideBar, setActiveSideBar } = useApp()
  const sideBarRef = useClickOutSide(() =>  setActiveSideBar(false));

  return ReactDOM.createPortal(
    <S.Container activeSideBar={activeSideBar} ref={sideBarRef}>
      <S.IconWrapper>
       <FiX size={20} onClick={() => onSideBar(false)}/>
      </S.IconWrapper>

      <S.DropList>
        <ul>
          <li>
            <FiUser size={25}/>
            <span> Contatos</span>
          </li>
          <li>
            <FiFile size={25}/>
            <span> Categorias </span>
          </li>
        </ul>
      </S.DropList>
    </S.Container>
  , document.querySelector('#sidebar'))

}


export default SideBar;
