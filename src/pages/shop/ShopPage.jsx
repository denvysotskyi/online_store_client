import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../../components/typebar/TypeBar'

const ShopPage = () => {
  return (
    <Container>
      <Row className={'mt-2'}>
        <Col md={2}>
          <TypeBar />
        </Col>
        <Col md={10}>

        </Col>
      </Row>
    </Container>
  )
}

export default ShopPage