import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../index'
import { Row } from 'react-bootstrap'
import DeviceItem from '../deviceItem/DeviceItem'

const DeviceList = observer(() => {

  const { deviceStore } = useContext(Context)

  return (
    <Row className='d-flex mt-3'>
      {
        deviceStore.devices.map(device => <DeviceItem key={device.id}
                                                      device={device}
        >
                                            {device.name}
                                          </DeviceItem>)
      }
    </Row>
  )
})

export default DeviceList