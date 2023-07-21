import { useEffect } from 'react'
import * as S from './toast-styles'
import xCircleIcon from '@/ui/icons/x-circle.svg'
import checkCircleIcon from '@/ui/icons/check-circle.svg'
import { Toast } from '../toast-types'

type ToastMessageProps = {
  toast: Toast
  isClosing: boolean
  animatedRef: React.RefObject<HTMLDivElement>
  onRemoveToast: (id: number) => void
}

export function ToastMessage (props: ToastMessageProps) {
  const { toast, onRemoveToast, isClosing, animatedRef } = props

  function handleRemoveToast () {
    onRemoveToast(toast.id)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(toast.id)
    }, toast.duration || 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [toast, onRemoveToast])

  return (
    <S.Container
      type={toast.type}
      onClick={handleRemoveToast}
      role='button'
      tabIndex={0}
      isClosing={isClosing}
      ref={animatedRef}
    >
      {toast.type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {toast.type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{toast.message}</strong>
    </S.Container>
  )
}
