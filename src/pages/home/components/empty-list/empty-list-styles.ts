import styled from 'styled-components'

export const EmptyContainer = styled.div`
  text-align: center;

  p {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`
