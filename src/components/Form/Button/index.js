import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../../Spinner'
import * as S from './styles'

export default function Button(props) {
  const { children, isLoading, ...rest } = props
  console.log(isLoading)
  return (
    <S.Container {...rest}>
      {isLoading ? <Spinner width={16} height={16} /> : children}
    </S.Container>
  )
}

Button.propsTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  danger: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,
  danger: false,
}
