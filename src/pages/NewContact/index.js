import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Form/Input'
import Select from "../../components/Form/Select";
import Button from '../../components/Form/Button'


const NewContact = () =>{
  return(
    <React.Fragment>
      <PageHeader title={"Novo Contato"}/>
      <Input placeholder="Nome"/>
      <Select>
        <option value="123"> Instagram</option>
        <option value="123"> Instagram</option>
        <option value="123"> Instagram</option>
        <option value="123"> Instagram</option>
        <option value="123"> Instagram</option>
        <option value="123"> Instagram</option>
      </Select>
      <Button type="button" disabled={true}> Salvar Alterações </Button>
    </React.Fragment>
  )
}


export default NewContact;
