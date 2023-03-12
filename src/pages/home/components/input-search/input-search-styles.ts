import styled from 'styled-components'

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
