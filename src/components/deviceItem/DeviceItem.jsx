import { Card, Col, Image } from 'react-bootstrap'
import star from '../../assets/icons/star.svg'

const DeviceItem = ({ device: { name, price, rating, image }}) => {
  return (
    <Col md={3}>
      <Card style={{width: '150px', cursor: 'pointer'}}
            border={'light'}
      >
        <Image src={image}
               alt={name}
               width={150}
               height={150}
        />
        <div>
          <div className='d-flex justify-content-between align-items-center'
               style={{fontSize: '11px', fontWeight: 'bold', width:'140px', height: '40px'}}
          >
            {name}
          </div>

          <div>
            <div className='d-flex mt-2'
                 style={{marginBottom: '5px'}}
            >
              <div style={{fontSize: '15px', marginRight: '5px'}}>
                {rating}
              </div>
              <Image src={star}
                     alt={name}
                     width={20}
                     height={20}
              />
            </div>
            <div style={{fontSize: '28px', color: '#0d6efd'}}>
              <span>
                {price} грн.
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default DeviceItem