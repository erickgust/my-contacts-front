import { toastEventManager } from '@/utils/toast'
import { useCallback, useEffect, useState } from 'react'
import { ToastMessage } from '../toast-message'
import { Toast, ToastData } from '../toast-types'
import * as S from './container-styles'

export function ToastContainer () {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleAddToast = ({ message, type, duration }: ToastData) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        { message, type, duration, id: Math.random() },
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)
    return () => {
      toastEventManager.off('addtoast', handleAddToast)
    }
  }, [])

  const handleRemoveToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id))
  }, [])

  return (
    <S.Container>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          toast={toast}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </S.Container>
  )
}
