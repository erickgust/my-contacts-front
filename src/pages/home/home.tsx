import { Link } from 'react-router-dom'

import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'
import empty from '@/ui/icons/empty-box.svg'
import magnifierQuestion from '@/ui/icons/magnifier-question.svg'

import { formatPhone } from '@/utils/formatPhone'
import { Loader } from '@/components/loader'
import { Modal } from '@/components/modal'
import { useHome } from './use-home'
import { InputSearch } from './components/input-search'
import { Header } from './components/header'
import { ErrorStatus } from './components/error-status'

export function Home () {
  const {
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
  } = useHome()

  return (
    <div>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch
          value={search}
          onChange={handleSearchChange}
        />
      )}

      <Header
        hasError={hasError}
        contactsLength={contacts.length}
        filteredContactsLength={filteredContacts.length}
      />

      <S.Divider />

      {hasError && (
        <ErrorStatus onTryAgain={handleTryAgain} />
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
    </div>
  )
}
