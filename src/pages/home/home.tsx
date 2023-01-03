import * as S from './home-styles'

import arrow from '@/ui/icons/arrow.svg'
import edit from '@/ui/icons/edit.svg'
import trash from '@/ui/icons/trash.svg'
import { Link } from 'react-router-dom'

export function Home () {
  return (
    <div>
      <S.Label>
        <S.Input placeholder='Pesquisar contato...'/>
      </S.Label>
      <S.Header>
        <S.Strong>3 contatos</S.Strong>
        <Link to="/new">Novo contato</Link>
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
            <Link to="/edit/1">
              <img src={edit} alt="Editar" />
            </Link>
            <button type='button'>
              <img src={trash} alt="Deletar" />
            </button>
          </S.ContactActions>
        </S.ContactCard>

      </S.ListContainer>
    </div>
  )
}
