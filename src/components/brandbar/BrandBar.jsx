import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../index'
import { Card, Row } from 'react-bootstrap'

const BrandBar = observer(() => {

  const { deviceStore } = useContext(Context)

  return (
    <Row>
      {
        deviceStore.brands.map(brand => <Card className='p-3'
                                              style={{display: 'flex', justifyContent: 'center',
                                                alignItems: 'center', cursor: 'pointer', width: '120px'}}
                                              key={brand.id}
                                              border={brand.id === deviceStore._selectedBrand.id
                                                ? 'primary'
                                                : 'light'}
                                              onClick={() => deviceStore.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>)
      }
    </Row>
  )
})

export default BrandBar