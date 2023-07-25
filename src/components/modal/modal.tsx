import { ReactNode } from 'react'
import { Button } from '@/ui/button'
import { Portal } from '../portal'
import * as S from './modal-styles'
import { useAnimatedUnmount } from '@/resources/use-animated-unmount'

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
  const { elementRef, shouldRender } = useAnimatedUnmount(isVisible)

  if (!shouldRender) {
    return null
  }

  return (
    <Portal containerName='modal'>
      <S.Overlay $isLeaving={!isVisible} ref={elementRef}>
        <S.Modal $danger={danger} $isLeaving={!isVisible}>
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
    </Portal>
  )
}
