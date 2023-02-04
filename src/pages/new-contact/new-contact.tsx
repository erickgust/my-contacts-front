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
    try {
      const contact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        category_id: data.categoryId,
      }

      await contactsService.createContact(contact)
    } catch {
      const event = new CustomEvent('addtoast', {
        detail: {
          message: 'Ocorreu um erro ao cadastrar o contato',
          type: 'error',
        },
      })

      document.dispatchEvent(event)
    }
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
