import { memo } from 'react'
import { Link } from 'react-router-dom'
import * as S from './contacts-list-styles'

import { OrderBy } from '@/services/contacts-service'
import { Contact } from '@/services/mappers/contact-mapper'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'

type ContactsListProps = {
  filteredContacts: Contact[]
  orderBy: OrderBy
  onToggleOrderBy: () => void
  onDeleteContact: (contact: Contact) => void
}

function ContactsList ({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}: ContactsListProps) {
  return (
    <S.ListContainer>
      {filteredContacts.length > 0 && (
        <header>
          <S.SortButton type='button' onClick={onToggleOrderBy} orderBy={orderBy}>
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
              <span>{contact.phone}</span>
            </address>
          </S.ContactInfo>

          <S.ContactActions>
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt='Editar' />
            </Link>
            <button
              type='button'
              onClick={() => onDeleteContact(contact)}
            >
              <img src={trash} alt='Deletar' />
            </button>
          </S.ContactActions>
        </S.ContactCard>
      ))}
    </S.ListContainer>
  )
}

const ContactsListMemo = memo(ContactsList)

export { ContactsListMemo as ContactsList }
