import React from 'react'
import PropTypes from 'prop-types'
import * as S from  './styles'


const FormGroup = (props) =>{
  const { children, error } = props

  return(
    <S.Container>
      {children}
      {error && <small> {error}</small>}
    </S.Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,

}

FormGroup.defaultProps ={
  error:''
}


export default FormGroup;
