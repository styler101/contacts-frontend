import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Button from "../Form/Button";
import * as S from  './styles'

const Modal = (props) =>{
  const { danger } = props;

  return ReactDOM.createPortal((
    <S.Overlay>
      <S.Container danger={danger}>
        <h1> Titulo do Modal  </h1>
        <p> Corpo do modal </p>
        <S.Footer>
          <button type="button" className="cancel"> Cancelar </button>
          <Button type="button" danger={danger}> Deletar </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  ), document.getElementById("portal-root"))

}

Modal.propTypes ={
  danger: PropTypes.bool.isRequired
}

Modal.defaultProps ={
  danger: false
}


export default Modal;
