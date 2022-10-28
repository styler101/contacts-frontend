import React from 'react';

import ToastMessage from '../ToastMessage'
import * as S from './styles'

export default function ToastContainer(){
  return(
    <S.ToastContainer>
      <ToastMessage text="Default Toast" type="default"/>
      <ToastMessage text="Error Toast" type="danger"/>
      <ToastMessage text="Sucess  toast" type="success"/>
    </S.ToastContainer>
  )
}
