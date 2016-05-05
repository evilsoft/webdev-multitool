import m from 'mithril'
import { clipboard } from 'electron'

import compose from 'ramda/src/compose'

import concatIf       from 'shared/concatIf'
import actionDispatch from 'render/actionDispatch'

import { deleteUuid } from 'actions/uuid'

const texttoClip = clip => uuid => () => clip.writeText(uuid)

const copyItem    = texttoClip(clipboard)
const deleteItem  = actionDispatch(deleteUuid)

function controller(attrs) {
  const { uuid, dispatch, index } = attrs
  const remove = deleteItem(dispatch, index)

  return { copyItem, remove }
}

function view(ctrl, attrs) {
  const { uuid } = attrs
  const { copyItem, remove } = ctrl

  const used    = concatIf('uuid__item--used', uuid.used)
  const classes = used([ 'uuid__item' ]).join(' ')

  return (
    <li className={classes}>
      <span className="uuid__uuid">{uuid.uuid}</span>
      <div className="uuid__buttons form--inline">
        <button
          className="button"
          onclick={copyItem(uuid.uuid)}
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
