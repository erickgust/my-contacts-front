import * as S from './toast-styles'
import xCircleIcon from '@/ui/icons/x-circle.svg'
import checkCircleIcon from '@/ui/icons/check-circle.svg'
import { useEffect, useRef } from 'react'
import { Toast } from '../toast-types'

type ToastMessageProps = {
  toast: Toast
  isClosing: boolean
  onRemoveToast: (id: number) => void
  onAnimationEnd: (id: number) => void
}

export function ToastMessage (props: ToastMessageProps) {
  const { toast, onRemoveToast, isClosing, onAnimationEnd } = props
  const containerRef = useRef<HTMLDivElement>(null)

  function handleRemoveToast () {
    onRemoveToast(toast.id)
  }

  useEffect(() => {
    function handleAnimationEnd () {
      onAnimationEnd(toast.id)
      console.log('animation end')
    }

    const container = containerRef.current

    if (isClosing && container) {
      container.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      container?.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [isClosing, onAnimationEnd, toast.id])

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
      ref={containerRef}
    >
      {toast.type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {toast.type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{toast.message}</strong>
    </S.Container>
  )
}
