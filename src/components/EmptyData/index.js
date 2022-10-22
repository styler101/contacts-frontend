import React from 'react'
import PropTypes from 'prop-types'
import icon from '../../assets/img/svg/sad.svg'
import * as S from './styles'

export default function EmptyData(props) {
  const { onLoadData } = props

  return (
    <S.Container>
      <hr />
      <header>
        <img src={icon} alt='sad face' />
        <div>
          <h1> Ocorreu um erro ao obter os seus contatos! </h1>
          <button onClick={onLoadData}> Tente Novamente!</button>
        </div>
      </header>
    </S.Container>
  )
}

EmptyData.propTypes = {
  onLoadData: PropTypes.func.isRequired,
}

EmptyData.propTypes = {
  onLoadData: () => {},
}
