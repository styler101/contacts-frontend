import React from 'react';
import { ReactComponent  as Icon } from '../../../assets/img/svg/check-circle.svg'
import { ReactComponent as Icon2} from '../../../assets/img/svg/x-circle.svg'
import PropTypes from 'prop-types'
import * as S from './styles'

// EventEmmitter -> é a emissão de todos os eventos sendo disparados e funções que ficam ouvindo esses emmiters
// São um conjunto de events e listeners
// listeners -> é uma função
// events -> São eventos customizados que o componente que ira ouvir e ira executar o mesmo.
export default function ToastMessage(props){
  const { text, type } = props

  return <S.Container type={type}>
    {type === 'success' && <Icon/>}
    {type === 'danger' && <Icon2/>}
    <strong>{ text} </strong>
  </S.Container>
}


ToastMessage.propsTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger'])
}

ToastMessage.defaultProps ={
  type: 'default'
}
