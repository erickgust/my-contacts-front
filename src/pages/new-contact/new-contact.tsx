import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import contactsService from '@/services/contacts-service'

export type FormData = {
  name: string
  email: string
  phone: string
  categoryId: string
}

export function NewContact () {
  async function handleSubmit (data: FormData) {
    const contact = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      category_id: data.categoryId,
    }

    const response = await contactsService.createContact(contact)
  }

  return (
    <>
      <PageHeader title='Novo contato' />
      <ContactForm
        buttonLabel='Cadastrar'
        onSubmit={handleSubmit}
      />
    </>
  )
}
