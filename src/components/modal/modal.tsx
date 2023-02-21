import { Button } from '@/ui/button'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import * as S from './modal-styles'

type ModalProps = {
  title: string
  danger?: boolean
  isVisible: boolean
  isLoading?: boolean
  children: ReactNode | ReactNode[]
  cancelLabel?: string
  confirmLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export function Modal (props: ModalProps) {
  const {
    title,
    danger,
    isVisible,
    isLoading,
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

  if (!isVisible) {
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
            disabled={isLoading}
          >
            {cancelLabel}
          </button>

          <Button
            type='button'
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  ), modalContainer)
}
