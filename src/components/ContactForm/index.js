import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types'

import FormGroup from "../FormGroup";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from '../Form/Button'


import categoriesServices from '../../services/categories'

import { isEmailValid } from '../../utils/Validators/index'
import { formatPhone } from '../../utils/Formaters/index'
import useErrors from '../../hooks/Errors/useErrors'
import * as S from './styles'

// ControllerComponent -> São componentes que podem ser controlados pelo react
// UncontrolledComponent  -> os componentes de input passam as ser gerenciados pela DOM
const ContactForm = (props) =>{

  const { buttonLabel } = props

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [categories, setCategories] = React.useState([])
  const [isLoadingCategories, setIsLoadingCategories] = React.useState(true)
  const { errors, setError, removeError, getErrorMessageByFieldName  } = useErrors()

  function handleSubmit(event){
    event.preventDefault()
    console.log({
      name,
      email,
      phone,
      selectedCategory
    })
  }

  function handleNameChange(event){
    setName(event.target.value);
    !event.target.value ?  setError({ field: 'name', message: "Nome Obrigatório"}) : removeError({ field: 'name'})
  }

   function handleEmailChange(event){
    setEmail(event.target.value)
    if(event.target.value && !isEmailValid(event.target.value)){
      setError( { field: 'email', message: 'O Formato do email é invalido !' })
    }else{
     removeError({ field:'email'})
    }
   }

   function handlePhoneNumber(event){
    setPhone(formatPhone(event.target.value))
   }

   let isFormValid =  (name && errors.length === 0)

  const loadContacts = useCallback(async() =>{
    setIsLoadingCategories(true)
    try{
      const response = await categoriesServices.getAllCategories();
      setCategories(response)
    }catch{
      setCategories([])
    }finally {
     setIsLoadingCategories(false)
    }
      },[])

  useEffect(() =>{
    loadContacts()
  },[loadContacts])


  return(
   <React.Fragment>

    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup  error={getErrorMessageByFieldName( 'name')} >

          <Input
            placeholder="Nome *"
            error={getErrorMessageByFieldName( 'name')}
            value={name}
            onChange={handleNameChange}
          />

        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')} >
          <Input
            type="email"
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
            onChange={handlePhoneNumber}
            maxLenght="15"
          />
        </FormGroup>

        <FormGroup isLoading={isLoadingCategories}>
          <Select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory((event.target.value))}
            disabled={isLoadingCategories}
          >
            <option  value={""}> Sem Categoria </option>
            {categories.map((category) =>(
              <option key={category.id} value={category.id}> {category.name}</option>
            ))}
          </Select>
        </FormGroup>

        <S.ButtonContainer>
          <Button type="submit" disabled={!isFormValid}> {buttonLabel} </Button>
        </S.ButtonContainer>

    </S.Form>

   </React.Fragment>
  )

}


ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm;
