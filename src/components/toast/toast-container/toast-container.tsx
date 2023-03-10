import { ToastMessage } from '../toast-message'
import * as S from './container-styles'
import { useToastContainer } from './use-toast-container'

export function ToastContainer () {
  const { toasts, handleRemoveToast } = useToastContainer()

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
