import React, { useEffect } from 'react'
import { ReactComponent as Icon } from '../../../assets/img/svg/check-circle.svg'
import { ReactComponent as Icon2 } from '../../../assets/img/svg/x-circle.svg'
import PropTypes from 'prop-types'
import * as S from './styles'

// EventEmmitter -> é a emissão de todos os eventos sendo disparados e funções que ficam ouvindo esses emmiters
// São um conjunto de events e listeners
// listeners -> é uma função
// events -> São eventos customizados que o componente que ira ouvir e ira executar o mesmo.
export default function ToastMessage(props) {
  const { message, onRemoveMessage } = props
  const { type, id, text, duration } = message

  useEffect(() => {
    const timerId = setTimeout(() => {
      onRemoveMessage(id)
    }, duration || 3000)

    return () => {
      clearTimeout(timerId)
    }

  }, [onRemoveMessage, id, duration])

  return (
    <S.Container
      type={type}
      onClick={() => onRemoveMessage(id)}
      tabIndex={0}
      role='button'
    >
      {type === 'success' && <Icon />}
      {type === 'danger' && <Icon2 />}
      <strong>{text} </strong>
    </S.Container>
  )
}

ToastMessage.propsTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }),
  onRemoveMessage: PropTypes.func,
}

ToastMessage.defaultProps = {
  type: 'default',
}
