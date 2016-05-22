import m from 'mithril'

import UuidItem from './UuidItem'

function view(ctrl, attrs) {
  const { uuids, remove } = attrs

  return (
    <ul className="uuid__results">
      {uuids.map((x, i) => (<UuidItem index={i} uuid={x} remove={remove} /> ))}
    </ul>
  )
}

const UuidList = { view }

export default UuidList
