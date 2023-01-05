import { FormGroup } from '@/components/form-group'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import { isEmailValid } from '@/utils/isEmailValid'
import { useState } from 'react'
import * as S from './contact-form-styles'

type ContactFormProps = {
  buttonLabel: string
}

type ErrorBody = {
  field: string
  message: string
}

export function ContactForm ({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState<ErrorBody[]>([])

  function handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)

    if (!e.target.value) {
      setErrors(errors => [
        ...errors,
        { field: 'name', message: 'Nome é obrigatório.' },
      ])
    } else {
      setErrors(errors => errors.filter(error => error.field !== 'name'))
    }
  }

  function handleEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      const errorAlreadyExists = errors.find(error => error.field === 'email')

      if (errorAlreadyExists) {
        return
      }
      setErrors(errors => [
        ...errors,
        { field: 'email', message: 'E-mail inválido.' },
      ])
    } else {
      setErrors(errors => errors.filter(error => error.field !== 'email'))
    }
  }

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    console.log({ name, email, phone, category })
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder='Nome'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">Linkedin</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button>{buttonLabel}</Button>
      </S.ButtonContainer>
    </form>
  )
}
