import m from 'mithril'

import UuidEntry  from './UuidEntry'
import UuidList   from './UuidList'

function view(ctrl, attrs) {
  const { uuids, dispatch } = attrs
  const results = uuids || []

  return (
    <div className="uuid">
      <UuidEntry dispatch={dispatch} />
      <UuidList dispatch={dispatch} uuids={results} />
    </div>
  )
}

const GenerateUUID = { view }

export default GenerateUUID
