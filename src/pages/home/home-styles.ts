import styled from 'styled-components'

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin: 1.6rem 0;
`
