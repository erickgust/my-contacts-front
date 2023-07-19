import styled, { css, keyframes } from 'styled-components'
import { ToastType } from '../toast-types'

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const messageOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`

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
  type?: ToastType
  isClosing?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 1.6rem 3.2rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;


  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  color: #FFF;

  animation: ${messageIn} 300ms ease-in-out;
  ${({ isClosing }) => isClosing && css`animation: ${messageOut} 300ms ease-in-out forwards;`}

  img {
    margin-right: 0.8rem;
  }

  & + & {
    margin-top: 1.2rem;
  }

  ${({ type }) => colorVariants[type || 'default'] || colorVariants.default}
`
