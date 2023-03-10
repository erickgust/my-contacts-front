import { useCallback, useEffect, useState } from 'react'
import { Toast, ToastData } from '../toast-types'
import { toastEventManager } from '@/utils/toast'

export function useToastContainer () {
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

  return { toasts, handleRemoveToast }
}
