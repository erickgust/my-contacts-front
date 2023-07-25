import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import contactsService, { OrderBy } from '@/services/contacts-service'

import { toast } from '@/utils/toast'
import { Contact } from '@/services/mappers/contact-mapper'

export function useHome () {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [orderBy, setOrderBy] = useState<OrderBy>('asc')
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isDeleteModalLoading, setIsDeleteModalLoading] = useState(false)
  const [
    contactBeingDeleted,
    setContactBeingDeleted,
  ] = useState<Contact | null>(null)
  const deferredSearch = useDeferredValue(search)

  const filteredContacts = useMemo(() => contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(deferredSearch.toLowerCase()),
  ), [contacts, deferredSearch])

  async function fetchContacts (orderBy: OrderBy) {
    try {
      setIsLoading(true)

      const contacts = await contactsService.listContacts(orderBy)

      setHasError(false)
      setContacts(contacts)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts(orderBy)
  }, [orderBy])

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy(orderBy => orderBy === 'asc' ? 'desc' : 'asc')
  }, [])

  function handleSearchChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleTryAgain () {
    fetchContacts(orderBy)
  }

  async function handleConfirmDeleteContact () {
    try {
      if (contactBeingDeleted === null) {
        return
      }

      setIsDeleteModalLoading(true)

      await contactsService.deleteContact(contactBeingDeleted.id)

      setContacts(contacts =>
        contacts.filter(contact => contact.id !== contactBeingDeleted?.id),
      )

      handleCloseDeleteModal()

      toast({
        message: 'Contato deletado com sucesso!',
        type: 'success',
      })
    } catch {
      toast({
        message: 'Ocorreu um erro ao deletar o contato!',
        type: 'error',
      })
    } finally {
      setIsDeleteModalLoading(false)
    }
  }

  const handleDeleteContact = useCallback((contact: Contact) => {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted(contact)
  }, [])

  function handleCloseDeleteModal () {
    setIsDeleteModalVisible(false)
  }

  return {
    isLoading,
    hasError,
    contacts,
    search,
    orderBy,
    isDeleteModalVisible,
    isDeleteModalLoading,
    contactBeingDeleted,
    filteredContacts,
    handleSearchChange,
    handleToggleOrderBy,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    handleTryAgain,
  }
}
