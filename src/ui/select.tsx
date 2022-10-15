import styled from 'styled-components'

export const Select = styled.select`
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

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`
