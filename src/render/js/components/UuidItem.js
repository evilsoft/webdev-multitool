import m              from 'mithril'
import { clipboard }  from 'electron'

import compose from 'ramda/src/compose'

const texttoClip  = clip => uuid => () => clip.writeText(uuid)
const copyItem    = texttoClip(clipboard)

function controller(attrs) {
  return { copyItem }
}

function view(ctrl, attrs) {
  const { index, remove } = attrs
  const { uuid }  = attrs.uuid

  const { copyItem } = ctrl

  const useUuid = compose(remove(index), copyItem(uuid))

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

const UuidItem = { controller, view }

export default UuidItem
