import { ToastMessage } from '../toast-message'
import * as S from './container-styles'
import { useToastContainer } from './use-toast-container'

export function ToastContainer () {
  const {
    toasts,
    pendingCloseIds,
    handleRemoveToast,
    handleAnimationEnd,
  } = useToastContainer()

  return (
    <S.Container>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          toast={toast}
          onRemoveToast={handleRemoveToast}
          onAnimationEnd={handleAnimationEnd}
          isClosing={pendingCloseIds.includes(toast.id)}
        />
      ))}
    </S.Container>
  )
}
