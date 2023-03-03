import { useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ContactForm, ContactFormRef } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'
import { Loader } from '@/components/loader'

import contactsService from '@/services/contacts-service'
import { ContactFormData } from '@/services/mappers/ContactMapper'

import { toast } from '@/utils/toast'
import { useSafeAsyncAction } from '@/resources/use-safe-async-action'

type Params = {
  id: string
}

export function EditContact () {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')
  const contactFormRef = useRef<ContactFormRef>(null)
  const safeAsyncAction = useSafeAsyncAction()
  const { id } = useParams<Params>()
  const history = useHistory()

  useEffect(() => {
    async function loadContact () {
      try {
        const contact = await contactsService.getContactById(id)

        safeAsyncAction(() => {
          contactFormRef.current?.setFieldsValue(contact)
          setIsLoading(false)
          setContactName(contact.name)
        })
      } catch {
        safeAsyncAction(() => {
          history.push('/')

          toast({
            type: 'error',
            message: 'Contato não encontrado!',
          })
        })
      }
    }

    loadContact()
  }, [id, history, safeAsyncAction])

  async function handleSubmit (contact: ContactFormData) {
    try {
      const updatedContact = await contactsService.updateContact(id, contact)

      setContactName(updatedContact.name)
      toast({
        message: 'Contato editado com sucesso!',
        type: 'success',
      })
    } catch {
      toast({
        message: 'Ocorreu um erro ao editar o contato!',
        type: 'error',
      })
    }
  }

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
