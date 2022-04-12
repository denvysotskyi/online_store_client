import { useContext } from 'react'
import { Context } from '../../index'
import { Container, Navbar, Nav  } from 'react-bootstrap'

const NavBar = () => {

  const { user } = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          STOREZILLA
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            Home
          </Nav.Link>
          <Nav.Link href="#features">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing">
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar