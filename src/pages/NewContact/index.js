import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from "../../components/ContactForm";
import contactsService from "../../services/contact/ContactService";

const NewContact = () =>{

  async function handleSubmit(payload){
    try{
      const response = await contactsService.createContact(payload)
      console.log(response);
    }catch{
      alert('Ocorreu um erro ao cadastrar  o contato')
    }

  }

  return(
    <React.Fragment>
      <PageHeader title={"Novo Contato"}/>
      <ContactForm
        buttonLabel={'Salvar Alterações'}
        onSumbit={handleSubmit}
      />
    </React.Fragment>
  )
}


export default NewContact;
