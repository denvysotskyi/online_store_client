import { Button, Card, Form } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../index'

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
        <Button className='mt-3'
                style={{marginLeft: 'auto'}}
                variant='outline-primary'
                onClick={() => userStore.setIsAuth(true)}
        >
          Войти
        </Button>
      </Form>
    </Card>
  )
}

export default AuthForm