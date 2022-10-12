import React from 'react';
import PropTypes from 'prop-types'
import FormGroup from "../FormGroup";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from '../Form/Button'

import * as S from './styles'


const ContactForm = (props) =>{
  const { buttonLabel } = props
  return(
    <S.Form>
        <FormGroup>
          <Input placeholder="Nome"/>
        </FormGroup>

        <FormGroup>
          <Input placeholder="E-mail"/>
        </FormGroup>

        <FormGroup>
          <Input placeholder="Telefone"/>
        </FormGroup>

        <FormGroup>
          <Select>
            <option value="instagram"> Instagram </option>
            <option value="linkedin"> Linkedin </option>
            <option value="linkedin"> Site </option>
          </Select>

          <S.ButtonContainer>
          <Button type="submit"> {buttonLabel} </Button>
          </S.ButtonContainer>

        </FormGroup>
    </S.Form>
  )

}


ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm;
