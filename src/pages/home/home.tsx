import * as S from './home-styles'

import { Loader } from '@/components/loader'
import { Modal } from '@/components/modal'

import { useHome } from './use-home'

import { Header } from './components/header'
import { EmptyList } from './components/empty-list'
import { InputSearch } from './components/input-search'
import { ErrorStatus } from './components/error-status'
import { SearchNotFound } from './components/not-found'
import { ContactsList } from './components/contacts-list'

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
            <EmptyList />
          )}

          {filteredContacts.length === 0 && contacts.length > 0 && (
            <SearchNotFound search={search} />
          )}

          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />
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
