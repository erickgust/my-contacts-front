import styled, { css } from 'styled-components'
import { ToastType } from '../toast-types'

const colorVariants = {
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
}

type ContainerProps = {
  type: ToastType
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem 3.2rem;
  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #FFF;
  font-size: 1.6rem;

  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

  img {
    margin-right: 0.8rem;
  }

  & + & {
    margin-top: 1.2rem;
  }

  ${({ type }) => colorVariants[type] || colorVariants.default}
`
