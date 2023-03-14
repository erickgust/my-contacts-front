import styled from 'styled-components'

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  p {
    margin-left: 2.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[200]};
    overflow-wrap: anywhere;
  }
`
