import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 2.4rem;

    strong {
      font-size: 2.2rem;
      display: block;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`
