import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import ContactService from '../../services/contact/ContactService'
import Loader from '../../components/Loader'
import { addToast } from '../../utils/Toast'

const EditContact = () => {
  const { id } = useParams()
  const history = useHistory()
  const [contactName, setContactName] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const contactFormRef = React.useRef(null)

  const loadContactData = React.useCallback(async () => {
    try {
      const contact = await ContactService.getContactById(id)
      setLoading(false)
      setContactName(contact.name)
      contactFormRef.current.setFieldValues(contact)
    } catch (error) {
      console.log(error)
      addToast({
        text: 'Contato não encontrado',
        duration: 3000,
        type: 'danger',
      })
      //  history.push('/')
    }
  }, [id])

  async function handleSubmit(formData) {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.category_id,
    }
    await ContactService.updateContact(id, contact)
    setContactName(contact.name)
  }

  React.useEffect(() => {
    loadContactData()
  }, [loadContactData])

  return (
    <React.Fragment>
      {loading && <Loader loading={loading} />}
      <React.Fragment>
        <PageHeader
          title={loading ? `Carregando..` : `Editar ${contactName}`}
        />
        <ContactForm
          ref={contactFormRef}
          buttonLabel={'Editar Alterações'}
          onSumbit={handleSubmit}
        />
      </React.Fragment>
    </React.Fragment>
  )
}

export default EditContact
