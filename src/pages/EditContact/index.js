import React from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import PageHeader from "../../components/PageHeader";
import ContactForm from '../../components/ContactForm'
import ContactService from '../../services/contact/ContactService'
import Loader from '../../components/Loader'
import { addToast } from "../../utils/Toast";

const EditContact = () =>{
  const { id } = useParams();
  const history = useHistory()
  const [loading, setLoading] = React.useState(true)

  const loadContactData = React.useCallback(async() =>{
    try{
      const contact = await ContactService.getContactById(id)
      setLoading(false)
    }catch{
      addToast({
        text: 'Contato não encontrado',
        duration: 3000,
        type: 'danger'
      })
      history.push('/')
    }

  },[id, history])

  React.useEffect(() =>{
      loadContactData()
  },[loadContactData])

  return(
    <React.Fragment>
      { loading && <Loader loading={loading}/>}
       <React.Fragment>
         <PageHeader title={"Editar Contato "}/>
         <ContactForm buttonLabel={'Editar Alterações'}/>
       </React.Fragment>


    </React.Fragment>
  )
}


export default EditContact;
