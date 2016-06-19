import m from 'mithril'

import { connect } from 'store'

import {
  clearUuid,
  deleteUuid
} from 'actions/uuid'

import {
  curry,
  compose,
  prop,
  always,
  pick,
  defaultTo
} from 'shared/helpers'

import actionDispatch from 'render/actionDispatch'

import UuidEntry  from './UuidEntry'
import UuidList   from './UuidList'

const clearUuids  = actionDispatch(clearUuid)
const deleteItem  = actionDispatch(deleteUuid)

const requestUUID = curry((fn, num) => () => fn({ type: 'uuid', num }))

function controller(attrs) {
  const { dispatch, copyText, sendTask } = attrs

  const request = requestUUID(sendTask)
  const clear   = clearUuids(dispatch)
  const remove  = x => compose(always(x), deleteItem(dispatch), prop('index'))(x)
  const copy    = x => compose(always(x), copyText, prop('uuid'))(x)

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

const qry = compose(defaultTo({}), pick(['uuids']))

const GenerateUUID = connect({ view, controller }, qry)

export default GenerateUUID
