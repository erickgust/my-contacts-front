import { ReactNode } from 'react'
import * as S from './form-group-styles'

type FormGroupProps = {
  children: ReactNode | ReactNode[]
  error?: string
}

export function FormGroup ({ children, error }: FormGroupProps) {
  return (
    <S.Container>
      {children}
      {error && <small>{error}</small>}
    </S.Container>
  )
}
