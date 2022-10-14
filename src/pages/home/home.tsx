import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'

export function Home () {
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

        <S.ContactCard>
          <S.ContactInfo>
            <div className='name'>
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>

            <address>
              <span>mateus@devacademy.com.br</span>
              <span>(41) 99999-9999</span>
            </address>
          </S.ContactInfo>

          <S.ContactActions>
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type='button'>
              <img src={trash} alt="Deletar" />
            </button>
          </S.ContactActions>
        </S.ContactCard>

      </S.ListContainer>
    </S.Container>
  )
}
