import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader'

import arrow from '../../assets/img/svg/arrow.svg'
import editIcon from '../../assets/img/svg/edit.svg'
import trashIcon from '../../assets/img/svg/trash.svg'
import searchIcon from '../../assets/img/svg/magnifier-question.svg'
import contactService from '../../services/contact/ContactService'
import { formatPhone } from '../../utils/Formaters'

import * as S from './styles'
import RequestError from "../../components/RequestError";
import EmptyData from "../../components/EmptyData";

// SameOriginPolicy(SOP)  -> Politica de mesma origem só existem dentro de navegadores é quando fazendo a requisão para o mesmo endereço só funciona com funções de requisições com javascript.
// Origin -> é a nossa url conjunto de protolocolo, dominio e porta.

// CORS -> Cross-origin ressource sharing(compartilhamento de recursos entre origens cruzadas) entre saída e destino.

// Requisições de Perfliet
const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  const [sort, setSort] = React.useState('ASC')
  const [hasError, setHasError] = React.useState(false)


  const loadContacts = useCallback(async () => {
    try {
      setLoading(true)
      const contactList = await contactService.listContacts(sort)
      setData(contactList)
    } catch {
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }, [sort])

  React.useEffect(() => {
    loadContacts()
  }, [loadContacts])

  function handleOrderByName() {
    setSort((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'))
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  const filteredContacts = React.useMemo(
    () =>
      data.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [data, searchTerm]
  )

  return (
    <React.Fragment>
      { hasError ? ( <RequestError onLoadData={loadContacts}/>): (
        <React.Fragment>

        {data.length <= 0 ?  (<EmptyData link={'/new'}/>)
          : (
            <React.Fragment>
              <Loader loading={loading} />
              <S.InputSearchContainer>
                <input
                  type='text'
                  placeholder='Pesquisar pelo nome'
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </S.InputSearchContainer>

              <S.Container>

                <React.Fragment>
                  <S.Header>
                    <strong>
                      {!hasError && (
                        <React.Fragment>
                          {filteredContacts.length}{' '}
                          {filteredContacts.length === 1 ? 'Contato' : 'Contatos'}{' '}
                        </React.Fragment>
                      )}
                    </strong>
                    <Link to='/new'> Novo Contato </Link>
                  </S.Header>

                  <S.ListContainer direction={sort}>
                    <header>
                      {filteredContacts.length > 0 && (
                        <button
                          type='button'
                          className='sort-button'
                          disabled={data.length <= 0}
                          onClick={handleOrderByName}
                        >
                          <span> Nome </span>
                          <img src={arrow} alt={'Arrow icon'} />
                        </button>
                      )}
                    </header>
                  </S.ListContainer>
                  { (data.length > 0  && filteredContacts < 1) && (
                    <S.SearchNotFound>
                      <img src={searchIcon} alt="search icon"/>
                      <span> Nenhum resultado foi encontrado para <strong>{`"${searchTerm}"`}</strong></span>
                    </S.SearchNotFound>
                  )}
                  {filteredContacts.length > 0 &&
                    filteredContacts.map((contact) => (
                      <S.Card key={contact.id}>
                        <div className='info'>
                          <div className='contact-name'>
                            <strong> {contact.name} </strong>
                            {contact?.category_name && (
                              <small className='category'>
                                {' '}
                                {contact.category_name}{' '}
                              </small>
                            )}
                          </div>
                          <span> {contact.email} </span>
                          <span> {formatPhone(contact.phone)}</span>
                        </div>
                        <div className='actions'>
                          <Link to={`/edit/${contact.id}`}>
                            <img src={editIcon} alt='edit icon' />
                          </Link>
                          <button>
                            <img src={trashIcon} alt='trash icon' />
                          </button>
                        </div>
                      </S.Card>
                    ))}
                </React.Fragment>
              </S.Container>
            </React.Fragment>
      ) }
          </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Home
