import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'
import sad from '@/ui/icons/sad.svg'
import empty from '@/ui/icons/empty-box.svg'
import magnifierQuestion from '@/ui/icons/magnifier-question.svg'

import { formatPhone } from '@/utils/formatPhone'
import { Loader } from '@/components/loader'
import contactsService, { OrderBy } from '@/services/contacts-service'
import { Button } from '@/ui/button'
import { Modal } from '@/components/modal'
import { toast } from '@/utils/toast'
import { Contact } from '@/services/mappers/contact-mapper'

export function Home () {
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

  const filteredContacts = useMemo(() => contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(search.toLowerCase()),
  ), [contacts, search])

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

  function handleToggleOrderBy () {
    setOrderBy(orderBy => orderBy === 'asc' ? 'desc' : 'asc')
  }

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

  function handleDeleteContact (contact: Contact) {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted(contact)
  }

  function handleCloseDeleteModal () {
    setIsDeleteModalVisible(false)
    setContactBeingDeleted(null)
  }

  return (
    <div>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        isLoading={isDeleteModalLoading}
        isVisible={isDeleteModalVisible}
        title={
          `Tem certeza que deseja remover o contato ”${contactBeingDeleted?.name}”?`
        }
        confirmLabel='Deletar'
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {contacts.length > 0 && (
        <S.Label>
          <S.Input
            placeholder='Pesquisar contato...'
            value={search}
            onChange={handleSearchChange}
          />
        </S.Label>
      )}

      <S.Header justifyCenter={(!hasError && contacts.length === 0)}>
        {(!hasError && contacts.length > 0) && (
          <S.Strong>
            {contacts.length}
            {' '}
            {contacts.length === 1 ? 'contato' : 'contatos'}
          </S.Strong>
        )}
        <Link to='/new'>Novo contato</Link>
      </S.Header>

      <S.Divider />

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt='Rosto triste' />

          <div>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <S.ListContainer>
          {(contacts.length === 0 && !isLoading) && (
            <S.EmptyContainer>
              <img src={empty} alt='Caixa vazia' />

              <p>
                Você ainda não tem nenhum contato cadastrado! <br />
                Clique no botão <strong>”Novo contato”</strong> à
                cima para cadastrar o seu primeiro!
              </p>
            </S.EmptyContainer>
          )}

          {filteredContacts.length === 0 && contacts.length > 0 && (
            <S.SearchNotFoundContainer>
              <img src={magnifierQuestion} alt='Lupa questionando' />

              <p>
                Nenhum resultado foi encontrado para <strong>”{search}”</strong>.
              </p>
            </S.SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <header>
              <S.SortButton type='button' onClick={handleToggleOrderBy} orderBy={orderBy}>
                <span>Nome</span>
                <img src={arrow} alt='Arrow' />
              </S.SortButton>
            </header>
          )}

          {filteredContacts.map(contact => (
            <S.ContactCard key={contact.id}>
              <S.ContactInfo>
                <div className='name'>
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>

                <address>
                  <span>{contact.email}</span>
                  <span>{formatPhone(contact.phone)}</span>
                </address>
              </S.ContactInfo>

              <S.ContactActions>
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt='Editar' />
                </Link>
                <button
                  type='button'
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt='Deletar' />
                </button>
              </S.ContactActions>
            </S.ContactCard>
          ))}
        </S.ListContainer>
      )}
    </div>
  )
}
