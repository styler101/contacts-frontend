import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from "../../components/ContactForm";
import contactsService from "../../services/contact/ContactService";
import ApiError from "../../errors/ApiError";

// State Liffing -> é a elevação de estado com propriedades  passando como propriedade.
const NewContact = () =>{

  async function handleSubmit(payload){
  try{
     await contactsService.createContact( { body: payload })
  }catch{
    throw new ApiError('Erro ao cadastrar o contato')
  }
  }
  let contact = {

  }
  return(
    <React.Fragment>
      <PageHeader title={"Novo Contato"}/>
      <ContactForm
        buttonLabel={'Salvar Alterações'}
        onSumbit={handleSubmit}
        contact={contact}
      />
    </React.Fragment>
  )
}


export default NewContact;
