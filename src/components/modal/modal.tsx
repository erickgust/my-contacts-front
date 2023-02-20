import { Button } from '@/ui/button'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import * as S from './modal-styles'

type ModalProps = {
  danger?: boolean
  title: string
  children: ReactNode | ReactNode[]
  cancelLabel?: string
  confirmLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export function Modal (props: ModalProps) {
  const {
    danger,
    title,
    children,
    onCancel,
    onConfirm,
    cancelLabel = 'Cancelar',
    confirmLabel = 'Confirmar',
  } = props

  const modalContainer = document.querySelector('[data-js="modal-root"]')

  if (modalContainer === null) {
    return null
  }

  return createPortal((
    <S.Overlay>
      <S.Modal danger={danger}>
        <h1>{title}</h1>
        <div className='modal-body'>
          {children}
        </div>

        <S.Footer>
          <button
            type='button'
            className='cancel'
            onClick={onCancel}
          >
            {cancelLabel}
          </button>

          <Button
            type='button'
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  ), modalContainer)
}
