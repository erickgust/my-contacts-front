import { Link } from 'react-router-dom'
import * as S from './header-styles'

type HeaderProps = {
  hasError: boolean
  contactsLength: number
  filteredContactsLength: number
}

export function Header ({
  hasError,
  contactsLength,
  filteredContactsLength,
}: HeaderProps) {
  const isCentered = !hasError && contactsLength === 0
  const contactExists = !hasError && contactsLength > 0

  return (
    <S.Header justifyCenter={isCentered}>
      {contactExists && (
        <strong>
          {filteredContactsLength}
          {' '}
          {filteredContactsLength === 1 ? 'contato' : 'contatos'}
        </strong>
      )}

      <Link to='/new'>Novo contato</Link>
    </S.Header>
  )
}
