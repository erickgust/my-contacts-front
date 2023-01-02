import { ReactNode } from 'react'
import styled from 'styled-components'

type FormGroupProps = {
  children: ReactNode | ReactNode[]
}

const Container = styled.div`
  & + & {
    margin-top: 1.6rem;
  }
`

export function FormGroup ({ children }: FormGroupProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}
