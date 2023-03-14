import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin: 1.6rem 0;
`

export const ListContainer = styled.div`
  margin-top: 2.4rem;

  header {
    margin-bottom: 0.8rem;
  }
`
