import { Container } from 'react-bootstrap'
import AuthForm from './AuthForm'

const AuthPage = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center'
               style={{height: window.innerHeight - 54}}
    >
      <AuthForm />
    </Container>
  )
}

export default AuthPage



