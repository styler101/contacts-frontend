import React from 'react'
import PropTypes from 'prop-types'
import * as S from  './styles'


const FormGroup = (props) =>{
  const { children } = props
  return(
    <S.Container>
      {children}
    </S.Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGroup;
