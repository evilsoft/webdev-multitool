import m                from 'mithril'
import { ipcRenderer }  from 'electron'

import curry from 'ramda/src/curry'

import sendToChannel  from 'shared/sendToChannel'
import actionDispatch from 'render/actionDispatch'

import { clearUuid } from 'actions/uuid'

const sendTask    = sendToChannel(ipcRenderer, 'task')
const requestUUID = curry((fn, num) => () => fn({ type: 'uuid', num }))

const clearUuids = actionDispatch(clearUuid)

function controller(attrs) {
  const { dispatch } = attrs

  const request = requestUUID(sendTask)
  const clear   = clearUuids(dispatch, null)

  return { request, clear }
}

function view(ctrl) {
  const { num, request, clear } = ctrl

  return (
    <div className="uuid__entry form--inline">
      <div className="buttonGroup">
        <button
          className="button uuid__button"
          type="button"
          onclick={request(1)}
        >+1</button>
        <button
          className="button uuid__button"
          type="button"
          onclick={request(5)}
        >+5</button>
        <button
          className="button uuid__button"
          type="button"
          onclick={request(10)}
        >+10</button>
      </div>
      <button
        className="button uuid__button"
        type="button"
        onclick={clear}
      >Clear</button>
    </div>
  )
}

const UuidEntry = { view, controller }

export default UuidEntry
