import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../../components/typebar/TypeBar'
import BrandBar from '../../components/brandbar/BrandBar'
import DeviceList from '../../components/deviceList/DeviceList'

const ShopPage = () => {
  return (
    <Container>
      <Row className={'mt-2'}>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
}

export default ShopPage