import styled, { css } from 'styled-components'

type ButtonProps = {
  $danger?: boolean
}

export const Button = styled.button<ButtonProps>`${({ theme, $danger }) => css`
  border: none;
  font-size: 1.6rem;
  border-radius: 4px;
  padding: 1rem 1.6rem;
  font-weight: 700;
  color: #FFF;
  background-color: ${theme.colors.primary.main};
  transition: background 100ms ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.primary.light};
  }

  &:active {
    background-color: ${theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #CCC !important;
    cursor: not-allowed;
  }

  ${$danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`}`
