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
    border-radius: 4px;
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
`

export const ListContainer = styled.div`
  margin-top: 2.4rem;

  header {
    margin-bottom: 0.8rem;
  }
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
