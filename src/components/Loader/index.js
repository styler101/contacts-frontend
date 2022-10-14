import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import * as S from './styles'



const Loading = (props) =>{
  const { loading } = props;

  return !loading ?
    <React.Fragment></React.Fragment> : ReactDOM.createPortal(
    (
      <S.Overlay>
        <S.Container>
          <div className="spinner"></div>
          <span> Carregando... </span>
        </S.Container>
      </S.Overlay>

    ), document.getElementById("loading-root")

  )


}


Loading.propTypes = {
  loading: PropTypes.bool.isRequired
}

Loading.defaultProps = {
  loading:false
}

export default Loading;
