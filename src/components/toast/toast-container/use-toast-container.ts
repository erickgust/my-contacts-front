import { useEffect } from 'react'
import { Toast, ToastData } from '../toast-types'
import { toastEventManager } from '@/utils/toast'
import { useAnimatedList } from '@/resources/use-animated-list'

export function useToastContainer () {
  const {
    handleRemoveItem,
    setItems: setToasts,
    renderList,
  } = useAnimatedList<Toast>()

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

  return {
    handleRemoveItem,
    renderList,
  }
}
