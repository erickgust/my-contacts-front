import { Button } from '@/ui/button'
import { createPortal } from 'react-dom'
import * as S from './modal-styles'

type ModalProps = {
  danger?: boolean
}

export function Modal ({ danger }: ModalProps) {
  const modalContainer = document.querySelector('[data-js="modal-root"]')

  if (modalContainer === null) {
    return null
  }

  return createPortal((
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
  ), modalContainer)
}
