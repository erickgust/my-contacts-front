import * as S from './header-styles'
import logo from '@/ui/logo.svg'

export function Header () {
  return (
    <S.Header>
      <img src={logo} alt='MyContacts' />
    </S.Header>
  )
}
