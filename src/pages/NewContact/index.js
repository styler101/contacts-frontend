import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from "../../components/ContactForm";

const NewContact = () =>{
  return(
    <React.Fragment>
      <PageHeader title={"Novo Contato"}/>
      <ContactForm buttonLabel={'Salvar Alterações'}/>
    </React.Fragment>
  )
}


export default NewContact;
