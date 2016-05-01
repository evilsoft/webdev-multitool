import m from 'mithril'
import { clipboard } from 'electron'

import concatIf from '../../../lib/concatIf'

import compose from 'ramda/src/compose'

import {
  deleteUuid,
  markUuid
} from '../actions'

import actionDispatch from '../../../lib/actionDispatch'

const texttoClip = clip => uuid => () => clip.writeText(uuid)

const copyIem     = texttoClip(clipboard)
const markItem    = actionDispatch(markUuid)
const deleteItem  = actionDispatch(deleteUuid)

function controller(attrs) {
  const { uuid, dispatch, index } = attrs
  const remove = deleteItem(dispatch, index)

  const copy = compose(
    markItem(dispatch, index),
    copyIem(uuid.uuid)
  )

  return { copy, remove }
}

function view(ctrl, attrs) {
  const { uuid } = attrs
  const { copy, remove } = ctrl

  const used    = concatIf('uuid__item--used', uuid.used)
  const classes = used([ 'uuid__item' ]).join(' ')

  return (
    <li className={classes}>
      <span className="uuid__uuid">{uuid.uuid}</span>
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
