import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ContactFormRef } from '@/components/contact-form'

import contactsService from '@/services/contacts-service'
import { ContactFormData } from '@/services/mappers/contact-mapper'

import { toast } from '@/utils/toast'
import { useSafeAsyncAction } from '@/resources/use-safe-async-action'

type Params = {
  id: string
}

export function useEditContact () {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')
  const contactFormRef = useRef<ContactFormRef>(null)
  const safeAsyncAction = useSafeAsyncAction()
  const { id } = useParams<Params>()
  const navigate = useNavigate()

  useEffect(() => {
    const controller = new AbortController()

    async function loadContact () {
      try {
        const contact = await contactsService.getContactById(id || '', controller.signal)

        safeAsyncAction(() => {
          contactFormRef.current?.setFieldsValue(contact)
          setIsLoading(false)
          setContactName(contact.name)
        })
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }

        safeAsyncAction(() => {
          navigate('/', { replace: true })

          toast({
            type: 'error',
            message: 'Contato não encontrado!',
          })
        })
      }
    }

    loadContact()

    return () => controller.abort()
  }, [id, navigate, safeAsyncAction])

  async function handleSubmit (contact: ContactFormData) {
    try {
      const updatedContact = await contactsService.updateContact(id || '', contact)

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

  return {
    contactFormRef,
    isLoading,
    contactName,
    handleSubmit,
  }
}
