import { forwardRef } from 'react'

import { Contact, ContactFormData } from '@/services/mappers/contact-mapper'

import { FormGroup } from '@/components/form-group'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import * as S from './contact-form-styles'
import { useContactForm } from './use-contact-form'

type ContactFormProps = {
  buttonLabel: string
  onSubmit: (data: ContactFormData) => Promise<void>
}

export type ContactFormRef = {
  setFieldsValue: (contact: Contact) => void
  resetFields: () => void
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>((
  { buttonLabel, onSubmit },
  ref,
) => {
  const {
    name,
    email,
    phone,
    categoryId,
    setCategoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    isFormValid,
    getErrorMessageByFieldName,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  } = useContactForm(ref, onSubmit)

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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryId(e.target.value)}
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
