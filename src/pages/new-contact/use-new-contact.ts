import { ContactFormRef } from '@/components/contact-form'
import contactsService from '@/services/contacts-service'
import { ContactFormData } from '@/services/mappers/contact-mapper'
import { toast } from '@/utils/toast'
import { useRef } from 'react'

export function useNewContact () {
  const contactFormRef = useRef<ContactFormRef>(null)

  async function handleSubmit (contact: ContactFormData) {
    try {
      await contactsService.createContact(contact)

      contactFormRef.current?.resetFields()

      toast({
        message: 'Contato cadastrado com sucesso!',
        type: 'success',
      })
    } catch {
      toast({
        message: 'Ocorreu um erro ao cadastrar o contato!',
        type: 'error',
      })
    }
  }

  return {
    contactFormRef,
    handleSubmit,
  }
}
