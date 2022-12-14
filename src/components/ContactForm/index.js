import React, {
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'

import PropTypes from 'prop-types'

import FormGroup from '../FormGroup'
import Input from '../Form/Input'
import Select from '../Form/Select'
import Button from '../Form/Button/index'

import useSafeAsyncState from '../../hooks/UseSafeAsyncState'
import useErrors from '../../hooks/Errors/useErrors'

import categoriesService from '../../services/categories'

import { isEmailValid } from '../../utils/Validators/index'
import { addToast } from '../../utils/Toast'
import { notEmptyStringOrDefault, formatPhone } from '../../utils/Formaters'

import * as S from './styles'
// ControllerComponent -> São componentes que podem ser controlados pelo react
// UncontrolledComponent  -> os componentes de input passam as ser gerenciados pela DOM

const ContactForm = forwardRef((props, ref) => {
  const { buttonLabel, onSumbit } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors()
  const [categories, setCategories] = useSafeAsyncState([])
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true)
  useImperativeHandle(
    ref,
    () => {
      return {
        setFieldValues: (contact) => {
          console.log(contact)
          setName(notEmptyStringOrDefault(contact.name))
          setEmail(notEmptyStringOrDefault(contact.email))
          setPhone(notEmptyStringOrDefault(formatPhone(contact.phone), ''))
          setSelectedCategory(notEmptyStringOrDefault(contact.category.id))
        },

        resetFields: () => {
          setName('')
          setEmail('')
          setPhone('')
          setSelectedCategory('')
        },
      }
    },
    []
  )

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        name,
        email,
        phone,
        category_id: selectedCategory,
      }
      console.log(payload, payload)
      await onSumbit(payload)
      addToast({
        text: 'Contato cadastrado com sucesso!',
        type: 'success',
        duration: 2000,
      })
    } catch {
      // Podemos usar o Custom event também sem parametros por exemplos se quisermos limpar todas a informações salvas no storaged
      // const removeStoragedAfterLogOut =  new CustomEvent('removestoragedafterlogout´) os custom event são case sensitive a forma como a palavra foi escrita faz diferença
      addToast({
        text: 'Erro ao cadastrar o contato',
        type: 'danger',
        duration: 7000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleNameChange(event) {
    setName(event.target.value)
    !event.target.value
      ? setError({ field: 'name', message: 'Nome Obrigatório' })
      : removeError({ field: 'name' })
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'O Formato do email é invalido !' })
    } else {
      removeError({ field: 'email' })
    }
  }

  function handlePhoneNumber(event) {
    setPhone(formatPhone(event.target.value))
  }

  let isFormValid = name && errors.length === 0

  const loadContacts = useCallback(async () => {
    setIsLoadingCategories(true)
    try {
      const response = await categoriesService.getAllCategories()
      setCategories(response)
    } catch {
      setCategories([])
    } finally {
      setIsLoadingCategories(false)
    }
  }, [setCategories, setIsLoadingCategories])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  return (
    <>
      <S.Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            placeholder='Nome *'
            error={getErrorMessageByFieldName('name')}
            value={name}
            onChange={handleNameChange}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type='email'
            placeholder='E-mail'
            error={getErrorMessageByFieldName('email')}
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder='Telefone'
            value={phone}
            onChange={handlePhoneNumber}
            maxLenght='15'
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup isLoading={isLoadingCategories}>
          <Select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            disabled={isLoadingCategories || isSubmitting}
          >
            <option value={''}> Sem Categoria </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {' '}
                {category.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <S.ButtonContainer>
          <Button
            isLoading={isSubmitting}
            disabled={!isFormValid || isSubmitting}
            type='submit'
          >
            {buttonLabel}
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  )
})

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSumbit: PropTypes.func.isRequired,
}

ContactForm.defaultProps = {
  buttonLabel: '',
  onSumbit: () => {},
}

export default ContactForm
