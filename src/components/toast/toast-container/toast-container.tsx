import { ToastMessage } from '../toast-message'
import * as S from './container-styles'
import { useToastContainer } from './use-toast-container'

export function ToastContainer () {
  const {
    handleRemoveItem,
    renderList,
  } = useToastContainer()

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
