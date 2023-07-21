import { useEffect } from 'react'
import { ToastMessage } from '../toast-message'

import * as S from './container-styles'
import { Toast, ToastData } from '../toast-types'

import { useAnimatedList } from '@/resources/use-animated-list'
import { toastEventManager } from '@/utils/toast'

export function ToastContainer () {
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

  return (
    <S.Container>
      {renderList((toast, { isClosing, animatedRef }) =>
        <ToastMessage
          key={toast.id}
          toast={toast}
          onRemoveToast={handleRemoveItem}
          isClosing={isClosing}
          animatedRef={animatedRef}
        />,
      )}
    </S.Container>
  )
}
