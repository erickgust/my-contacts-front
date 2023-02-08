import * as S from './toast-styles'
import xCircleIcon from '@/ui/icons/x-circle.svg'
import checkCircleIcon from '@/ui/icons/check-circle.svg'
import { ToastType } from '../toast-types'

type ToastMessageProps = {
  id: number
  message: string
  type?: ToastType
  onRemoveToast: (id: number) => void
}

export function ToastMessage (props: ToastMessageProps) {
  const { id, message, type = 'default', onRemoveToast } = props

  function handleRemoveToast () {
    onRemoveToast(id)
  }

  return (
    <S.Container type={type} onClick={handleRemoveToast}>
      {type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{message}</strong>
    </S.Container>
  )
}
