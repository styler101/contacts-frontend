import React from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader'

import arrow from '../../assets/img/svg/arrow.svg'
import editIcon from '../../assets/img/svg/edit.svg'
import trashIcon from '../../assets/img/svg/trash.svg'

import {formatPhone} from '../../utils/Formaters'


import * as S from './styles'

// SameOriginPolicy(SOP)  -> Politica de mesma origem só existem dentro de navegadores é quando fazendo a requisão para o mesmo endereço só funciona com funções de requisições com javascript.
// Origin -> é a nossa url conjunto de protolocolo, dominio e porta.

// CORS -> Cross-origin ressource sharing(compartilhamento de recursos entre origens cruzadas) entre saída e destino.

// Requisições de Perfliet
const Home = () => {
  const [ search, setSearch] = React.useState('')
  const [ loading, setLoading ]= React.useState(true)
  const [data, setData] = React.useState([])

  React.useEffect(() =>{
    fetch('http://localhost:3001/contacts')
      .then((response) => {
        setLoading(true)
        return response.json()
      })
      .then((payload) => {
        setData(payload)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      });
  },[])



  return (
   <React.Fragment>
     <Loader loading={loading} />

     <S.InputSearchContainer>
       <input
         type='text'
         placeholder='Pesquisar pelo nome'
         value={search}
         onChange={(e) => setSearch((e.target.value))}/>
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

      {data.map((contact) => (
        <S.Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong> {contact.name} </strong>
              <small className="category"> {contact.category_name} </small>
            </div>
            <span> {contact.email} </span>
            <span> {formatPhone(contact.phone)}</span>
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

      ))}
    </S.Container>
   </React.Fragment>
  )
}



export default Home
