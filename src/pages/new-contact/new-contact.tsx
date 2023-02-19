import { PageHeader } from '@/components/page-header'
import { ContactForm, ContactFormRef } from '@/components/contact-form'
import contactsService from '@/services/contacts-service'
import { toast } from '@/utils/toast'
import { useRef } from 'react'

export type FormData = {
  name: string
  email: string
  phone: string
  categoryId: string
}

export function NewContact () {
  const contactFormRef = useRef<ContactFormRef>(null)

  async function handleSubmit (data: FormData) {
    try {
      const contact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        category_id: data.categoryId,
      }

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

  return (
    <>
      <PageHeader title='Novo contato' />
      <ContactForm
        ref={contactFormRef}
        buttonLabel='Cadastrar'
        onSubmit={handleSubmit}
      />
    </>
  )
}
