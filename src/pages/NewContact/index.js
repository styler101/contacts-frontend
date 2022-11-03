import React from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import contactsService from '../../services/contact/ContactService'
import ApiError from '../../errors/ApiError'
import contactMapper from '../../services/mappers/ContactMapper'

// State Liffing -> é a elevação de estado com propriedades  passando como propriedade.
const NewContact = () => {
  const formRef = React.useRef(null)
  const history = useHistory()

  async function handleSubmit(payload) {
    try {
      await contactsService.createContact({ body: payload })
      formRef.current.resetFields()
      history.push('/')
    } catch {
      throw new ApiError('Erro ao cadastrar o contato')
    }
  }

  return (
    <React.Fragment>
      <PageHeader title={'Novo Contato'} />
      <ContactForm
        ref={formRef}
        buttonLabel={'Salvar Alterações'}
        onSumbit={handleSubmit}
      />
    </React.Fragment>
  )
}

export default NewContact
