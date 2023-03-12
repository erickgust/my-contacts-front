import styled, { css } from 'styled-components'

type HeaderProps = {
  justifyCenter?: boolean
}

export const Header = styled.header<HeaderProps>`${({ theme, justifyCenter }) => css`
  font-weight: 700;
  display: flex;
  align-items: center;

  strong {
    font-size: 2.4rem;
  }

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
