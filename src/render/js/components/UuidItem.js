import m from 'mithril'
import { clipboard } from 'electron'

import { deleteUuid } from '../actions'

const copyItem    = (clip, uuid) => () => clip.writeText(uuid)
const deleteItem  = (dispatch, action, index) => () => dispatch(action(index))

function controller(attrs) {
  const { uuid, dispatch, index } = attrs

  const copy    = copyItem(clipboard, uuid)
  const remove  = deleteItem(dispatch, deleteUuid, index)

  return { copy, remove }
}

function view(ctrl, attrs) {
  const { uuid } = attrs
  const { copy, remove } = ctrl

  return (
    <li className="uuid__item">
      <span className="uuid__uuid">{uuid}</span>
      <div className="uuid__buttons form--inline">
        <button
          className="button"
          onclick={copy}
          type="button">Copy</button>
        <button
          className="button"
          onclick={remove}
          type="button">Delete</button>
      </div>
    </li>
  )
}

const UuidItem = { controller, view }

export default UuidItem
