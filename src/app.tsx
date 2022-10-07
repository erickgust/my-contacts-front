import styled from 'styled-components'
import { Header } from './header'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

function App () {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

export { App }
