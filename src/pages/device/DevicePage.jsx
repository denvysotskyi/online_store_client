import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import iphone13pro128gb_graphite
  from '../../assets/images/iphone13pro_128gb_graphite.jpg'
import { useNavigate } from 'react-router'
import { SHOP_ROUTE } from '../../utils/consts'
import star from '../../assets/icons/star.svg'

const DevicePage = () => {

  const navigate = useNavigate()

  const device = {
      id: 1,
      name: 'iPhone 13 Pro 128GB Graphite',
      price: 38445,
      rating: 4.8,
      image: iphone13pro128gb_graphite
    }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image className='mt-3'
                 src={device.image}
                 alt={device.name}
                 width={300}
                 height={300}
          />
        </Col>
        <Col md={4} className='mt-3'>
          <Row className='d-flex flex-column align-items-center'>
            <h3>
              {device.name}
            </h3>
            <div className='d-flex align-items-center justify-content-center'
                 style={{background: `url(${star}) no-repeat center center`,
                   width: '200px', height: '200px', backgroundSize: 'cover', fontSize: '33px'}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4} className='mt-3'>
          <Card className='d-flex flex-column align-items-center justify-content-around'
            style={{width: '300px', height: '300px', fontSize: '32px', border: '5px solid lightgrey'}}>
            <h1 style={{color: 'rgb(13, 110, 253)'}}>
              {device.price} грн.
            </h1>
            <Button variant='outline-primary'>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Button variant='outline-dark'
              className='mt-3'
              onClick={() => navigate(SHOP_ROUTE)}
      >
        Вернутся к товарам
      </Button>
    </Container>
  )
}

export default DevicePage