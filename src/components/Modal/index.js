import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Form/Button'
import CreateReactPortal from '../../hooks/ReactPortal'
import * as S from './styles'

const Modal = (props) => {
  const { danger, actions, children, isLoading } = props
  const { onCancel, onConfirm } = actions
  const { cancelHandler, cancelLabelButton } = onCancel
  const { confirmHandler, confirmLabelButton } = onConfirm

  console.log('Moda Lodaing', isLoading)
  return (
    <CreateReactPortal containerId={'modal-root'}>
      <S.Overlay>
        <S.Container danger={danger}>
          {children}
          <S.Footer>
            {onCancel && onCancel?.cancelLabelButton && (
              <button
                type='button'
                className='cancel'
                onClick={cancelHandler}
                disabled={isLoading}
              >
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
      </S.Overlay>
      ,
    </CreateReactPortal>
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
