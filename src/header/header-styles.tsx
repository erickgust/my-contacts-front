import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 7.4rem;
  gap: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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

  font-size: 1.6rem;

  &::placeholder {
    color: #BCBCBC;
  }
`
