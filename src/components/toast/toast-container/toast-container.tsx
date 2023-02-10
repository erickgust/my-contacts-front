import { ToastData, toastEventManager } from '@/utils/toast'
import { useCallback, useEffect, useState } from 'react'
import { ToastMessage } from '../toast-message'
import { ToastType } from '../toast-types'
import * as S from './container-styles'

export type Toast = {
  message: string
  type?: ToastType
  id: number
}

export function ToastContainer () {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleAddToast = ({ message, type }: ToastData) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        { message, type, id: Math.random() },
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
