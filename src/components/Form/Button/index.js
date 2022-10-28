import React from 'react';
import PropTypes from 'prop-types'
import Spinner from "../../Spinner";
import * as S from './styles'


export default function Button(props){
  const { children, isLoading, disabled, type  } = props;
  return(
    <S.Container
      disabled={disabled  || isLoading}
      type={type}>
      {isLoading ? <Spinner width={16} height={16}/> : children}
    </S.Container>
  )
}


Button.propsTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,

}

Button.defaultProps ={
  type: 'button',
  isLoading: false,
  disabled: false,
}

