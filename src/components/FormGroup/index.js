import React from 'react'
import PropTypes from 'prop-types'
import * as S from  './styles'


const FormGroup = (props) =>{
  const { children, error, isLoading } = props

  return(
    <S.Container>
      <div className="form-item">
        {children}
        {isLoading && <div className="loader"> </div>}
      </div>
      {error && <small> {error}</small>}
    </S.Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,

}

FormGroup.defaultProps ={
  error:'',
  isLoading: false,
}


export default FormGroup;
