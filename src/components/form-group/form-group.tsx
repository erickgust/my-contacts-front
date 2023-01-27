import { ReactNode } from 'react'
import { Spinner } from '../spinner'
import * as S from './form-group-styles'

type FormGroupProps = {
  children: ReactNode | ReactNode[]
  error?: string
  isLoading?: boolean
}

export function FormGroup ({ children, error, isLoading }: FormGroupProps) {
  return (
    <S.Container>
      <div className='form-info'>
        {children}

        {isLoading && (
          <div className='loader'>
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </S.Container>
  )
}
