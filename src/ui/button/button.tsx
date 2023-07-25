import { Spinner } from '@/components/spinner'
import * as S from './button-styles'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  danger?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export function Button (props: ButtonProps) {
  const { children, danger, disabled, type, isLoading, onClick } = props

  return (
    <S.Button
      type={type}
      disabled={disabled || isLoading}
      $danger={danger}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </S.Button>
  )
}
