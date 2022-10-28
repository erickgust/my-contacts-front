import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ReturnLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.6rem;
    font-weight: 700;
  }

  img {
    transform: rotate(-90deg);
    margin-right: 0.8rem;
  }
`

export const H1 = styled.h1`
  font-size: 2.4rem;
`
