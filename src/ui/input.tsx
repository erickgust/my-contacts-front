import styled, { css } from 'styled-components'

type InputProps = {
  error?: string
}

export const Input = styled.input<InputProps>`
  height: 5.2rem;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  background-color: #FFF;
  border: 2px solid #FFF;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px #0000000A;
  width: 100%;
  outline: none;
  transition: border-color 200ms ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ error, theme }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
    color: ${theme.colors.danger.main};
  `}
`
