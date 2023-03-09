
import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'
import { Loader } from '@/components/loader'
import { useEditContact } from './use-edit-contact'

export function EditContact () {
  const {
    contactFormRef,
    isLoading,
    contactName,
    handleSubmit,
  } = useEditContact()

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel='Salvar alterações'
        onSubmit={handleSubmit}
      />
    </>
  )
}
