import { Button, Card, Form, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../index'
import { NavLink } from 'react-router-dom'
import {REGISTRATION_ROUTE} from "../../utils/consts";

const AuthForm = () => {

  const { userStore } = useContext(Context)

  return (
    <Card className='p-5' style={{width: '600px'}}>
      <h2 className='m-auto'>
        Авторизация
      </h2>
      <Form className='d-flex flex-column'>
        <Form.Control className='mt-3'
                      placeholder='Введите ваш email'
        />
        <Form.Control className='mt-3'
                      placeholder='Введите ваш пароль'
        />
        <Row>
          <div style={{marginTop: '10px'}}>
            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>
                            Зарегистрируйтесь
                          </NavLink>
          </div>
          <Button className='mt-3 align-self-end'
                  variant='outline-success'
                  type='submit'
                  onClick={() => userStore.setIsAuth(true)}
          >
            Войти
          </Button>
        </Row>
      </Form>
    </Card>
  )
}

export default AuthForm