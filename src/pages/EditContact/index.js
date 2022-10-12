import React from 'react'
import PageHeader from "../../components/PageHeader";
import ContactForm from '../../components/ContactForm'

const EditContact = () =>{
  return(
    <React.Fragment>
      <PageHeader title={"Editar Contato "}/>
      <ContactForm buttonLabel={'Editar Alterações'}/>
    </React.Fragment>
  )
}


export default EditContact;
