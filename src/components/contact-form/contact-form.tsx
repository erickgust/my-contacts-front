import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

import { FormData } from '@/pages/new-contact'
import { Contact } from '@/services/contacts-service'

import categoriesService, { Category } from '@/services/categories-service'

import { formatPhone } from '@/utils/formatPhone'
import { isEmailValid } from '@/utils/isEmailValid'
import { useErrors } from '@/resources/use-errors'

import { FormGroup } from '@/components/form-group'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import * as S from './contact-form-styles'

type ContactFormProps = {
  buttonLabel: string
  onSubmit: (data: FormData) => Promise<void>
}

export type ContactFormRef = {
  setFieldsValue: (contact: Contact) => void
  resetFields: () => void
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>((
  { buttonLabel, onSubmit },
  ref,
) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors()

  const isFormValid = Boolean(name && errors.length === 0)

  useImperativeHandle(ref, () => ({
    setFieldsValue: (contact) => {
      setName(contact.name ?? '')
      setEmail(contact.email ?? '')
      setPhone(formatPhone(contact.phone ?? ''))
      setCategoryId(contact.category_id ?? '')
    },
    resetFields: () => {
      setName('')
      setEmail('')
      setPhone('')
      setCategoryId('')
    },
  }), [])

  useEffect(() => {
    async function loadCategories () {
      try {
        const categoriesList = await categoriesService.listCategories()

        setCategories(categoriesList)
      } catch {} finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [])

  function handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome ?? obrigat??rio.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inv??lido.' })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange (e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value))
  }

  async function handleSubmit (e: React.FormEvent) {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({ name, email, phone, categoryId })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome*'
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          placeholder='E-mail'
          type='email'
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          error={getErrorMessageByFieldName('phone')}
          placeholder='Telefone'
          value={phone}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value=''>Selecione uma categoria</option>

          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type='submit' disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </form>
  )
})

ContactForm.displayName = 'ContactForm'

export { ContactForm }
