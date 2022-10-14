import React from 'react';
import PropTypes from 'prop-types'

import FormGroup from "../FormGroup";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from '../Form/Button'


import { isEmailValid  } from '../../utils/Validators/index'
import useErrors from '../../hooks/Errors/useErrors'
import * as S from './styles'

// ControllerComponent -> São componentes que podem ser controlados pelo react
// UncontrolledComponent  -> os componentes de input passam as ser gerenciados pela DOM
const ContactForm = (props) =>{

  const { buttonLabel } = props

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('')
  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors()

  function handleSubmit(event){
    event.preventDefault()
    console.log({
      name,
      email,
      phone,
      category
    })
  }

  function handleNameChange(event){
    setName(event.target.value);
    !event.target.value ?  setError({ field: 'name', message: "Nome Obrigatório"}) : removeError({ field: 'name'})
  }

   function handleEmailChange(event){
    setEmail(event.target.value)
    if(event.target.value && !isEmailValid(event.target.value)){
      const findEmail = getErrorMessageByFieldName('email')
      if(findEmail) return
      setError( { field: 'email', message: 'O Formato do email é invalido !' })
    }else{
     removeError({ field:'email'})

    }

   }

  console.log(errors)

  return(
   <React.Fragment>

    <S.Form onSubmit={handleSubmit}>
      <FormGroup  error={getErrorMessageByFieldName( 'name')} >

          <Input
            placeholder="Nome"
            error={getErrorMessageByFieldName( 'name')}
            value={name}
            onChange={handleNameChange}
          />

        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')} >
          <Input
            placeholder="E-mail"
            error={getErrorMessageByFieldName( 'email')}
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>

        <FormGroup >
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Select
            value={category}
            onChange={(event) => setCategory((event.target.value))}>
            <option value="instagram"> Instagram </option>
            <option value="linkedin"> Linkedin </option>
            <option value="Site"> Site </option>
          </Select>

          <S.ButtonContainer>
          <Button type="submit" disabled={errors.length > 0}> {buttonLabel} </Button>
          </S.ButtonContainer>

        </FormGroup>
    </S.Form>
   </React.Fragment>
  )

}


ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm;
