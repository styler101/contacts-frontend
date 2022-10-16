import React from 'react'
import { BsInfoCircle} from 'react-icons/bs'
import * as S from './styles'

export default function EmptyData(){
  return(
    <S.Container>
      <BsInfoCircle color={"#bcbcbc"} size={32}/>
      <p> No momento não há nenhum registro cadastrado! </p>
    </S.Container>
  )
}


