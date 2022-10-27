import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styles'


export default function Spinner(props){
  const { width, height } = props;
  return(
    <S.Container width={width} height={height} ></S.Container>
  )
}


Spinner.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
