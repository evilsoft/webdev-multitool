import m  from 'mithril'

function view(ctrl, attrs) {
  const { index, use }  = attrs
  const { uuid }        = attrs.uuid

  const useUuid = () => use({index, uuid})

  return (
    <li className="uuid__item">
      <span className="uuid__uuid">{uuid}</span>
      <div className="uuid__buttons">
        <button
          className="button"
          onclick={useUuid}
          type="button">Use</button>
      </div>
    </li>
  )
}

const UuidItem = { view }

export default UuidItem
