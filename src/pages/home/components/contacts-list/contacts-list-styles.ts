import styled, { css } from 'styled-components'

type SortButtonProps = {
  $orderBy: 'asc' | 'desc'
}

export const ListContainer = styled.div`
  header {
    margin-bottom: 0.8rem;
  }
`

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

    ${({ $orderBy }) => $orderBy === 'asc' && css`
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
