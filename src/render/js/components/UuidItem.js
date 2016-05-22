import m              from 'mithril'
import { clipboard }  from 'electron'

import compose from 'ramda/src/compose'

import actionDispatch from 'render/actionDispatch'

import { deleteUuid } from 'actions/uuid'

const texttoClip  = clip => uuid => () => clip.writeText(uuid)
const copyItem    = texttoClip(clipboard)

const deleteItem  = actionDispatch(deleteUuid)

function controller(attrs) {
  const { dispatch } = attrs
  const remove = deleteItem(dispatch)

  return { copyItem, remove }
}

function view(ctrl, attrs) {
  const { index } = attrs
  const { uuid }  = attrs.uuid

  const { remove, copyItem } = ctrl

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
