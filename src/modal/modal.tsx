import { Button } from '@/ui/button'
import * as S from './modal-styles'

type ModalProps = {
  danger?: boolean
}

export function Modal ({ danger }: ModalProps) {
  return (
    <S.Overlay>
      <S.Modal danger={danger}>
        <h1>Tem certeza que deseja remover o contato ”Mateus Silva”?</h1>
        <p>Esta ação não poderá ser desfeita!</p>

        <S.Footer>
          <button type='button' className='cancel'>Cancelar</button>
          <Button type='button' danger={danger}>Deletar</Button>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  )
}
