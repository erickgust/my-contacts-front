import styled from 'styled-components'
import { Header } from './components/header'
import { Routes } from './routes'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1.6rem;
`

function App () {
  return (
    <Container>
      <Header/>
      <Routes />
    </Container>
  )
}

export { App }
