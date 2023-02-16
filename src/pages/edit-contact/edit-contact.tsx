import { useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ContactForm, ContactFormRef } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'

import contactsService from '@/services/contacts-service'
import { Loader } from '@/components/loader'
import { toast } from '@/utils/toast'

type Params = {
  id: string
}

export function EditContact () {
  const [isLoading, setIsLoading] = useState(true)
  const contactFormRef = useRef<ContactFormRef>(null)
  const { id } = useParams<Params>()
  const history = useHistory()

  useEffect(() => {
    async function loadContact () {
      try {
        const contactData = await contactsService.getContactById(id)

        contactFormRef.current?.setFieldsValue(contactData)
        setIsLoading(false)
      } catch {
        history.push('/')

        toast({
          type: 'error',
          message: 'Contato não encontrado!',
        })
      }
    }

    loadContact()
  }, [id, history])

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title='Editar Mateus Silva' />
      <ContactForm
        ref={contactFormRef}
        buttonLabel='Salvar alterações'
        onSubmit={async () => {}}
      />
    </>
  )
}
