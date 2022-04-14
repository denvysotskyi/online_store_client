import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { DEVICE_ROUTE } from '../../utils/consts'
import star from '../../assets/icons/star.svg'

const DeviceItem = ({ device: { id, name, price, rating, image }}) => {

  const navigate = useNavigate()

  return (
    <Col md={3}
         onClick={() => navigate(DEVICE_ROUTE + '/' + id)}
    >
      <Card style={{width: '150px', cursor: 'pointer'}}
            border={'light'}
      >
        <Image src={image}
               alt={name}
               width={150}
               height={150}
        />
        <div>
          <div className='d-flex justify-content-between align-items-center text-black-50'
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
            <div style={{fontSize: '28px', color: '#0d6efd', marginBottom: '15px'}}>
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