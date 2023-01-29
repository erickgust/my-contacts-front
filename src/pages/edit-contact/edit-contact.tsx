import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'

export function EditContact () {
  return (
    <>
      <PageHeader title='Editar Mateus Silva' />
      <ContactForm
        buttonLabel='Salvar alterações'
        onSubmit={() => {}}
      />
    </>
  )
}
