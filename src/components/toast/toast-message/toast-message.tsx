import * as S from './toast-styles'
import xCircleIcon from '@/ui/icons/x-circle.svg'
import checkCircleIcon from '@/ui/icons/check-circle.svg'
import { Toast } from '../toast-container'
import { useEffect } from 'react'

type ToastMessageProps = {
  toast: Toast
  onRemoveToast: (id: number) => void
}

export function ToastMessage (props: ToastMessageProps) {
  const { toast, onRemoveToast } = props

  function handleRemoveToast () {
    onRemoveToast(toast.id)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(toast.id)
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [toast.id, onRemoveToast])

  return (
    <S.Container
      type={toast.type}
      onClick={handleRemoveToast}
      role='button'
      tabIndex={0}
    >
      {toast.type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {toast.type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{toast.message}</strong>
    </S.Container>
  )
}
