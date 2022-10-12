import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import arrow from '../../assets/img/svg/arrow.svg'
import * as S from './styles'

const PageHeader = (props) => {
  const { title } = props;
  return(
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="arrow left"/>
        <strong> Voltar </strong>
      </Link>
      <h1> {title} </h1>
    </S.Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired

}

export default PageHeader;
