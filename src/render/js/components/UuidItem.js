import m  from 'mithril'

function view(ctrl, attrs) {
  const { index, use }  = attrs
  const { uuid }        = attrs.uuid

  const useUuid = () => use({index, uuid})

  return (
    <li className="uuid__item" onclick={useUuid}>
      <span className="uuid__uuid">{uuid}</span>
    </li>
  )
}

const UuidItem = { view }

export default UuidItem
