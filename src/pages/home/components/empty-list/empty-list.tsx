import * as S from './empty-list-styles'
import empty from '@/ui/icons/empty-box.svg'

export function EmptyList () {
  return (
    <S.EmptyContainer>
      <img src={empty} alt='Caixa vazia' />

      <p>
        Você ainda não tem nenhum contato cadastrado! <br />
        Clique no botão <strong>”Novo contato”</strong> à
        cima para cadastrar o seu primeiro!
      </p>
    </S.EmptyContainer>
  )
}
