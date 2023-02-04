import * as S from './toast-styles'
import xCircleIcon from '@/ui/icons/x-circle.svg'
import checkCircleIcon from '@/ui/icons/check-circle.svg'
import { ToastType } from '../toast-types'

type ToastMessageProps = {
  message: string
  type?: ToastType
}

export function ToastMessage ({ message, type = 'default' }: ToastMessageProps) {
  return (
    <S.Container type={type}>
      {type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{message}</strong>
    </S.Container>
  )
}
