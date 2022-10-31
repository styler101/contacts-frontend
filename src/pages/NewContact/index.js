import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import contactsService from '../../services/contact/ContactService'
import ApiError from '../../errors/ApiError'

// State Liffing -> é a elevação de estado com propriedades  passando como propriedade.
const NewContact = () => {
  const formRef = React.useRef(null);
  console.log(formRef.current)
  async function handleSubmit(payload) {
    try {
      await contactsService.createContact({ body: payload })
      formRef.current.resetFields()
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
