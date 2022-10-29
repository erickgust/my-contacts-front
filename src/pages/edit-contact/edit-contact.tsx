import { ContactForm } from '@/contact-form'
import { PageHeader } from '@/page-header'

export function EditContact () {
  return (
    <>
      <PageHeader title='Editar Mateus Silva' />
      <ContactForm buttonLabel='Salvar alterações'></ContactForm>
    </>
  )
}
