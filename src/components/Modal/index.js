import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Button from '../Form/Button'
import * as S from './styles'
import Spinner from '../Spinner'

const Modal = (props) => {
  const { danger, actions, children, isLoading } = props
  const { onCancel, onConfirm } = actions
  const { cancelHandler, cancelLabelButton } = onCancel
  const { confirmHandler, confirmLabelButton } = onConfirm

  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        {children}
        <S.Footer>
          {onCancel && onCancel?.cancelLabelButton && (
            <button type='button' className='cancel' onClick={cancelHandler}>
              {' '}
              {cancelLabelButton}{' '}
            </button>
          )}
          {onConfirm && onConfirm?.confirmLabelButton && (
            <Button
              type='button'
              danger={danger}
              onClick={confirmHandler}
              isLoading={isLoading}
              disabled={isLoading}
            >
              {confirmLabelButton}
            </Button>
          )}
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('portal-root')
  )
}

Modal.propTypes = {
  danger: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  actions: PropTypes.shape({
    onCancel: PropTypes.shape({
      cancelLabelButton: PropTypes.string,
      cancelHandler: PropTypes.func,
    }),
    onConfirm: PropTypes.shape({
      confirmLabelButton: PropTypes.string,
      confirmHandler: PropTypes.func,
    }),
  }),
}

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  actions: {
    onCancel: {
      cancelHandler: () => {},
      cancelLabelButton: 'Cancelar',
    },
    onConfirm: {
      confirmHandler: () => {},
      confirmLabelButton: 'Confirmar',
    },
  },
}

export default Modal
