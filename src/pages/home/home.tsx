import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatPhone } from '@/utils/formatPhone'

type ContactResponse = {
  category_id: string
  category_name: string
  email: string
  id: string
  name: string
  phone: string
}

type OrderBy = 'asc' | 'desc'

export function Home () {
  const [contacts, setContacts] = useState<ContactResponse[]>([])
  const [orderBy, setOrderBy] = useState<OrderBy>('asc')

  useEffect(() => {
    fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`)
      .then(response => response.json())
      .then((response) => setContacts(response))
      .catch(err => console.error(err))
  }, [orderBy])

  function handleToggleOrderBy () {
    setOrderBy(orderBy => orderBy === 'asc' ? 'desc' : 'asc')
  }

  console.log(contacts)

  return (
    <div>
      <S.Label>
        <S.Input placeholder='Pesquisar contato...'/>
      </S.Label>
      <S.Header>
        <S.Strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'contato' : 'contatos'}
        </S.Strong>
        <Link to='/new'>Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <S.SortButton type='button' onClick={handleToggleOrderBy} orderBy={orderBy}>
            <span>Nome</span>
            <img src={arrow} alt='Arrow' />
          </S.SortButton>
        </header>

        {contacts.map(contact => (
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
