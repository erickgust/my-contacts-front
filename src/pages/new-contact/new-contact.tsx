import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'

export function NewContact () {
  return (
    <>
      <PageHeader title='Novo contato' />
      <ContactForm buttonLabel='Cadastrar' />
    </>
  )
}
