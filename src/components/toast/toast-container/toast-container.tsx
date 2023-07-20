import { ToastMessage } from '../toast-message'
import * as S from './container-styles'
import { useToastContainer } from './use-toast-container'

export function ToastContainer () {
  const {
    handleRemoveItem,
    handleAnimationEnd,
    renderList,
  } = useToastContainer()

  return (
    <S.Container>
      {renderList((toast, { isClosing }) =>
        <ToastMessage
          key={toast.id}
          toast={toast}
          onRemoveToast={handleRemoveItem}
          onAnimationEnd={handleAnimationEnd}
          isClosing={isClosing}
        />,
      )}
    </S.Container>
  )
}
