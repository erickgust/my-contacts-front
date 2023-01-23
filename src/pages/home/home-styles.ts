import styled, { css } from 'styled-components'

export const Label = styled.label`
  width: 100%;
`

export const Input = styled.input`
  border: none;
  background-color: #FFF;
  outline-color: #5061FC;

  display: block;
  height: 5rem;
  width: 100%;
  border-radius: 2.5rem;
  padding: 0 1.6rem;
  margin-bottom: 3.2rem;

  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin: 1.6rem 0;
`

type HeaderProps = {
  justifyCenter?: boolean
}

export const Header = styled.header<HeaderProps>`${({ theme, justifyCenter }) => css`
  font-weight: 700;
  display: flex;
  align-items: center;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: ${theme.colors.primary.main};
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    border: 2px solid ${theme.colors.primary.main};
    display: inline-block;
    transition: all 200ms ease-in;
    margin-left: auto;
    margin-right: ${justifyCenter ? 'auto' : 0};

    &:hover {
      background-color: ${theme.colors.primary.main};
      color: #FFF;
    }
  }
`}`

export const Strong = styled.strong`
  font-size: 2.4rem;
`

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

export const ListContainer = styled.div`
  margin-top: 2.4rem;

  header {
    margin-bottom: 0.8rem;
  }
`

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

type SortButtonProps = {
  orderBy: 'asc' | 'desc'
}

export const SortButton = styled.button<SortButtonProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.main};

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 1.6rem;

  img {
    margin-left: 0.8rem;
    transition: transform 200ms ease-in;

    ${({ orderBy }) => orderBy === 'asc' && css`
      transform: rotate(180deg);
    `}
  }
`

export const ContactCard = styled.article`
  & + & {
    margin-top: 1.6rem;
  }

  padding: 1.6rem;
  background-color: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContactInfo = styled.div`
  .name {
    display: flex;
    align-items: center;

    strong {
      font-weight: 700;
      font-size: 1.6rem;
    }

    small {
      color: ${({ theme }) => theme.colors.primary.main};
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;

      margin-left: 0.8rem;
      border-radius: 4px;
      padding: 4px 8px;
    }
  }

  address {
    span {
      font-style: normal;
      display: block;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray[200]};
      line-height: 1.5;
    }
  }
`

export const ContactActions = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    background: none;
    padding: 0;
    margin-left: 0.8rem;
  }
`
