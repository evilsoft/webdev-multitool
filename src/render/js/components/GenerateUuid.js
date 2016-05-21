import m from 'mithril'

import UuidItem   from './UuidItem'
import UuidEntry  from './UuidEntry'

function mapItems(Comp, attrs) {
  const { dispatch } = attrs

  return function(uuid, index) {
    return <Comp dispatch={dispatch} index={index} uuid={uuid} />
  }
}

function view(ctrl, attrs) {
  const { uuids, dispatch } = attrs
  const results = uuids || []

  return (
    <div className="uuid">
      <UuidEntry dispatch={dispatch} />
      <ul className="uuid__results">
        {results.map(mapItems(UuidItem, { dispatch }))}
      </ul>
    </div>
  )
}

const GenerateUUID = { view }

export default GenerateUUID
