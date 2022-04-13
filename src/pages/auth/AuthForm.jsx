import { Button, Card, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../index'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'

const AuthForm = () => {

  const { userStore } = useContext(Context)
  const location = useLocation()

  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Card className='p-5' style={{width: '600px'}}>
      <h2 className='m-auto'>
        {
          isLogin
            ? 'Авторизация'
            : 'Регистрация'
        }
      </h2>
      <Form className='d-flex flex-column'>
        <Form.Control className='mt-3'
                      placeholder='Введите ваш email'
        />
        <Form.Control className='mt-3'
                      placeholder='Введите ваш пароль'
        />
        <Row className='d-flex flex-row m-auto'>
          {
            isLogin
              ? <span className='mt-3'>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>
                                  Зарегистрируйтесь
                                </NavLink>
                </span>
              : <span className='mt-3'>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>
                                  Войдите
                                </NavLink>
                </span>
          }
          <Button className='mt-3'
                  variant='outline-success'
                  type='submit'
                  onClick={() => userStore.setIsAuth(true)}
          >
            {
              isLogin
                ? 'Войти'
                : 'Регистрация'
            }
          </Button>
        </Row>
      </Form>
    </Card>
  )
}

export default AuthForm