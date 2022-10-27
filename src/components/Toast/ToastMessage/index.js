import React from 'react';
import { ReactComponent  as Icon } from '../../../assets/img/svg/check-circle.svg'
import { ReactComponent as Icon2} from '../../../assets/img/svg/x-circle.svg'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function ToastMessage(props){
  const { text, type } = props
  console.log(type);
  return <S.Container>
    {type === 'success' && <Icon/>}
    {type === 'error' && <Icon2/>}
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
