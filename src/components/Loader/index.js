import React from 'react'
import PropTypes from 'prop-types'
import CreateReactPortal from '../../hooks/ReactPortal'
import * as S from './styles'

const Loading = (props) => {
  const { loading } = props
  if (!loading) return null
  return (
    <CreateReactPortal containerId='loading-root'>
      <S.Overlay>
        <S.StyleSpinner>
          <S.CustomSpinner />
        </S.StyleSpinner>
      </S.Overlay>
    </CreateReactPortal>
  )
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
}

Loading.defaultProps = {
  loading: false,
}

export default Loading
