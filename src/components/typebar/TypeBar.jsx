import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../index'
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer(() => {

  const { deviceStore } = useContext(Context)

  return (
    <ListGroup>
      {
        deviceStore.types.map(type => <ListGroup.Item style={{cursor: 'pointer'}}
                                                      key={type.id}
                                                      active={type.id === deviceStore._selectedType.id}
                                                      onClick={() => deviceStore.setSelectedTypes(type)}
        >
                                        {type.name}
                                      </ListGroup.Item>)
      }
    </ListGroup>
  )
})

export default TypeBar