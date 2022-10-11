import * as S from './contacts-styles'

import arrow from '@/ui/icons/arrow.svg'

export function ContactsList () {
  return (
    <S.Container>
      <S.Header>
        <S.Strong>3 contatos</S.Strong>
        <a href="">Novo contato</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <S.SortButton type='button'>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </S.SortButton>
        </header>
      </S.ListContainer>
    </S.Container>
  )
}
