import { useEffect } from 'react'
import { Toast, ToastData } from '../toast-types'
import { toastEventManager } from '@/utils/toast'
import { useAnimatedList } from '@/resources/use-animated-list'

export function useToastContainer () {
  const {
    items: toasts,
    pendingCloseIds,
    handleAnimationEnd,
    handleRemoveItem,
    setItems: setToasts,
  } = useAnimatedList<Toast>([{ message: 'test', type: 'success', id: 1 }])

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
  }, [setToasts])

  return { toasts, pendingCloseIds, handleRemoveItem, handleAnimationEnd }
}
