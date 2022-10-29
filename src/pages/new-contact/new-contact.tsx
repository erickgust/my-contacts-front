import { PageHeader } from '@/page-header'
import { ContactForm } from '@/contact-form'

export function NewContact () {
  return (
    <>
      <PageHeader title='Novo contato' />
      <ContactForm buttonLabel='Cadastrar' />
    </>
  )
}
