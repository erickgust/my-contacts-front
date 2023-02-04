import { useEffect, useState } from 'react'
import { ToastMessage } from '../toast-message'
import { ToastType } from '../toast-types'
import * as S from './container-styles'

type Toast = {
  message: string
  type?: ToastType
  id: number
}

export function ToastContainer () {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleAddToast = (e: CustomEventInit<Toast>) => {
      if (!e.detail) return

      const { type, message } = e.detail

      setToasts((oldMessages) => [
        ...oldMessages,
        { message, type, id: Math.random() },
      ])
    }

    document.addEventListener('addtoast', handleAddToast)

    return () => {
      document.removeEventListener('addtoast', handleAddToast)
    }
  }, [])

  return (
    <S.Container>
      {toasts.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          message={message.message}
        />
      ))}
    </S.Container>
  )
}
