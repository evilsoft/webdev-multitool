import m from 'mithril'

import {
  clearUuid,
  deleteUuid
} from 'actions/uuid'

import curry    from 'ramda/src/curry'
import compose  from 'ramda/src/compose'
import prop     from 'ramda/src/prop'

import actionDispatch from 'render/actionDispatch'

import UuidEntry  from './UuidEntry'
import UuidList   from './UuidList'

const clearUuids  = actionDispatch(clearUuid)
const deleteItem  = actionDispatch(deleteUuid)

const requestUUID = curry((fn, num) => () => fn({ type: 'uuid', num }))

const thunkId = x => () => x

function controller(attrs) {
  const { dispatch, copyText, sendTask } = attrs

  const request = requestUUID(sendTask)
  const clear   = clearUuids(dispatch)
  const remove  = x => compose(thunkId(x), deleteItem(dispatch), prop('index'))(x)
  const copy    = x => compose(thunkId(x), copyText, prop('uuid'))(x)

  const use = compose(remove, copy)

  return { clear, request, use }
}

function view(ctrl, attrs) {
  const { uuids } = attrs
  const results = uuids || []

  const { clear, use, request } = ctrl

  return (
    <div className="uuid">
      <UuidEntry request={request} clear={clear} />
      <UuidList use={use} uuids={results} />
    </div>
  )
}

const GenerateUUID = { view, controller }

export default GenerateUUID
