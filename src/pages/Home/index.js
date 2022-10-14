import React from 'react'
import {Link} from 'react-router-dom'
import arrow from '../../assets/img/svg/arrow.svg'
import editIcon from '../../assets/img/svg/edit.svg'
import trashIcon from '../../assets/img/svg/trash.svg'


import * as S from './styles'

const Home = () => {
  const [ search, setSearch] = React.useState('')
  return (
   <React.Fragment>

     <S.InputSearchContainer>
       <input type='text' placeholder='Pesquisar pelo nome'  value={search} onChange={(e) => setSearch((e.target.value))}/>
     </S.InputSearchContainer>
    <S.Container>
      <S.Header>
        <strong> 3 Contatos </strong>
        <Link to="/new"> Novo Contato </Link>
      </S.Header>
      <S.ListContainer>
        <header>
          <button type="button" className='sort-button'>
            <span> Nome </span>
            <img src={arrow} alt={"Arrow icon"}/>
          </button>
        </header>
      </S.ListContainer>
      <S.Card>
        <div className="info">
          <div className="contact-name">
            <strong> Lucas Santos </strong>
            <small className="category"> linkedin </small>
          </div>
          <span> lucas@santos.gmail.com </span>
          <span> (31)919191-1919</span>
        </div>
        <div className="actions">
          <Link to="/edit/3">
            <img src={editIcon}  alt="edit icon"/>
          </Link>
          <button>
            <img src={trashIcon} alt="trash icon"/>
          </button>
        </div>

      </S.Card>
      <S.Card>
        <div className="info">
          <div className="contact-name">
            <strong> Lucas Santos </strong>
            <small className="category"> linkedin </small>
          </div>
          <span> lucas@santos.gmail.com </span>
          <span> (31)919191-1919</span>
        </div>
        <div className="actions">
          <a href="#">
            <img src={editIcon}  alt="edit icon"/>
          </a>
          <button>
            <img src={trashIcon} alt="trash icon"/>
          </button>
        </div>

      </S.Card>
      <S.Card>
        <div className="info">
          <div className="contact-name">
            <strong> Lucas Santos </strong>
            <small className="category"> linkedin </small>
          </div>
          <span> lucas@santos.gmail.com </span>
          <span> (31)919191-1919</span>
        </div>
        <div className="actions">
          <a href="#">
            <img src={editIcon}  alt="edit icon"/>
          </a>
          <button>
            <img src={trashIcon} alt="trash icon"/>
          </button>
        </div>

      </S.Card>
    </S.Container>
   </React.Fragment>
  )
}

export default Home
