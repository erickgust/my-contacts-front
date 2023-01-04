import { FormGroup } from '@/components/form-group'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import { useState } from 'react'
import * as S from './contact-form-styles'

type ContactFormProps = {
  buttonLabel: string
}

export function ContactForm ({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    console.log({ name, email, phone, category })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='E-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
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
