import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { useNewContact } from './use-new-contact'

export function NewContact () {
  const {
    contactFormRef,
    handleSubmit,
  } = useNewContact()

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
