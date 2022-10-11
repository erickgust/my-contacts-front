import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 3.2rem;
`

export const Header = styled.header`${({ theme }) => css`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: ${theme.colors.primary.main};
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    border: 2px solid ${theme.colors.primary.main};
    display: inline-block;
    transition: all 200ms ease-in;

    &:hover {
      background-color: ${theme.colors.primary.main};
      color: #FFF;
    }
  }
`}`

export const Strong = styled.strong`
  font-size: 2.4rem;
  color: #222222;
`

export const ListContainer = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;
`

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.main};

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 1.6rem;

  img {
    margin-left: 0.8rem;
  }
`
