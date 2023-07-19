import { useCallback, useEffect, useState } from 'react'
import { Toast, ToastData } from '../toast-types'
import { toastEventManager } from '@/utils/toast'

export function useToastContainer () {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [pendingCloseIds, setPendingCloseIds] = useState<number[]>([])

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
    setPendingCloseIds((prevIds) => [...prevIds, id])
  }, [])

  const handleAnimationEnd = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id))
    setPendingCloseIds((prevIds) => prevIds.filter(prevId => prevId !== id))
  }, [])

  return { toasts, pendingCloseIds, handleRemoveToast, handleAnimationEnd }
}
