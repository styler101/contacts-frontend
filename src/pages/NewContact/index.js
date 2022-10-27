import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from "../../components/ContactForm";
import contactsService from "../../services/contact/ContactService";
import ApiError from "../../errors/ApiError";
const NewContact = () =>{

  async function handleSubmit(payload){
  try{
    const response = await contactsService.createContact( { body: payload })
    console.log(response);
  }catch{
    throw new ApiError('Erro ao cadastrar o contato')
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
