import m from 'mithril'
import { ipcRenderer }  from 'electron'

import {
  clearUuid,
  deleteUuid
} from 'actions/uuid'

import curry from 'ramda/src/curry'
import sendToChannel  from 'shared/sendToChannel'
import actionDispatch from 'render/actionDispatch'

import UuidEntry  from './UuidEntry'
import UuidList   from './UuidList'

const clearUuids  = actionDispatch(clearUuid)
const deleteItem  = actionDispatch(deleteUuid)

const sendTask    = sendToChannel(ipcRenderer, 'task')
const requestUUID = curry((fn, num) => () => fn({ type: 'uuid', num }))
const request     = requestUUID(sendTask)

function controller(attrs) {
  const { dispatch } = attrs

  const clear   = clearUuids(dispatch, null)
  const remove  = deleteItem(dispatch)

  return { clear, remove }
}

function view(ctrl, attrs) {
  const { uuids, dispatch } = attrs
  const results = uuids || []
  const { clear, remove } = ctrl

  return (
    <div className="uuid">
      <UuidEntry request={request} clear={clear} />
      <UuidList remove={remove} uuids={results} />
    </div>
  )
}

const GenerateUUID = { view, controller }

export default GenerateUUID
