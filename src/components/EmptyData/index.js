import React from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import icon from '../../assets/img/svg/empty-box.svg'
import * as S from './styles'

 function EmptyData(props){
  const { link } = props;
  const history = useHistory()
  return (
    <S.Container>
        <button onClick={() => history.push(`${link}`)}> Novo Contato </button>
        <hr/>
        <div>
          <img src={icon} alt="empty data"/>
          <S.Wrapper>
            <p> Você ainda não tem nenhum contato cadastrado!</p>
            <p> Clique no botão <strong> {`"Novo Contato"`}</strong> a cima para cadastrar o seu primeiro!</p>
          </S.Wrapper>
        </div>
    </S.Container>
  )
}

EmptyData.propTypes = {
  link: PropTypes.string.isRequired
}

export default EmptyData;


