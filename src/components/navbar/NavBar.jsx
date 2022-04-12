import { useContext } from 'react'
import { Context } from '../../index'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {

  const { userStore } = useContext(Context)

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/shop'>
          STOREZILLA
        </Navbar.Brand>
        {
          userStore._isAuth
            ? <Nav className='ml-auto'>
                <Button variant='outline-primary'>
                  Админ панель
                </Button>
                <Button variant='outline-primary'
                        style={{ marginLeft: '8px' }}
                        onClick={() => userStore.setIsAuth(false)}
                >
                  Выйти
                </Button>
              </Nav>
            : <Nav className='ml-auto'>
                <Button variant='outline-primary'
                        onClick={() => userStore.setIsAuth(true)}
                >
                  Авторизация
                </Button>
              </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar