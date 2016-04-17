import m from 'mithril'

function view(ctrl, attrs) {
  const { uuid } = attrs

  return (
    <li className="uuid__item">
      <span className="uuid__uuid">{uuid}</span>
      <div className="uuid__buttons form--inline">
        <button className="button" type="button">Copy</button>
        <button className="button" type="button">Delete</button>
      </div>
    </li>
  )
}

const UuidItem = { view }

export default UuidItem
