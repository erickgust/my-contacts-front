import styled from 'styled-components'

export const Container = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    margin-top: 0.8rem;
    font-size: 1.2rem;
    display: block;
  }
`
