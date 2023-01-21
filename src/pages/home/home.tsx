import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'
import sad from '@/ui/icons/sad.svg'

import { formatPhone } from '@/utils/formatPhone'
import { Loader } from '@/components/loader'
import contactsService, { Contact, OrderBy } from '@/services/contacts-service'
import { Button } from '@/ui/button'

export function Home () {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [orderBy, setOrderBy] = useState<OrderBy>('asc')
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(() => contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(search.toLowerCase()),
  ), [contacts, search])

  useEffect(() => {
    setIsLoading(true)

    async function fetchContacts () {
      try {
        const contacts = await contactsService.listContacts(orderBy)

        setContacts(contacts)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContacts()
  }, [orderBy])

  function handleToggleOrderBy () {
    setOrderBy(orderBy => orderBy === 'asc' ? 'desc' : 'asc')
  }

  function handleSearchChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Loader isLoading={isLoading} />

      <S.Label>
        <S.Input
          placeholder='Pesquisar contato...'
          value={search}
          onChange={handleSearchChange}
        />
      </S.Label>
      <S.Header>
        {!hasError && (
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

            <Button>Tentar novamente</Button>
          </div>
        </S.ErrorContainer>
      )}

      <S.ListContainer>
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
                {contact.category_name && (
                  <small>{contact.category_name}</small>
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
              <button type='button'>
                <img src={trash} alt='Deletar' />
              </button>
            </S.ContactActions>
          </S.ContactCard>
        ))}

      </S.ListContainer>
    </div>
  )
}
