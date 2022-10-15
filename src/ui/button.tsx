import styled, { css } from 'styled-components'

export const Button = styled.button`${({ theme }) => css`
  border: none;
  font-size: 1.6rem;
  border-radius: 4px;
  width: 100%;
  height: 5.2rem;
  font-weight: 700;
  color: #FFF;
  background-color: ${theme.colors.primary.main};

  &:hover {
    background-color: ${theme.colors.primary.light};
  }

  &:active {
    background-color: ${theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #CCC;
    cursor: not-allowed;
  }
`}`
