import { Button } from '@/ui/button'
import * as S from './modal-styles'

export function Modal () {
  return (
    <S.Overlay>
      <S.Modal>
        <h1>Tem certeza que deseja remover o contato ”Mateus Silva”?</h1>
        <p>Esta ação não poderá ser desfeita!</p>

        <S.Footer>
          <button type='button' className='cancel'>Cancelar</button>
          <Button type='button'>Deletar</Button>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  )
}
