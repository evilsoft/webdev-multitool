import m                from 'mithril'
import { ipcRenderer }  from 'electron'

import sendToChannel  from 'shared/sendToChannel'
import actionDispatch from 'render/actionDispatch'

import { clearUuid } from 'actions/uuid'

const sendTask    = sendToChannel(ipcRenderer, 'task')
const requestUUID = (fn, prop) => () => fn({ type: 'uuid', num: prop() })

const clearUuids = actionDispatch(clearUuid)

function controller(attrs) {
  const { dispatch } = attrs

  const num     = m.prop('')
  const request = requestUUID(sendTask, num)
  const clear   = clearUuids(dispatch, null)

  return { num, request, clear }
}

function view(ctrl) {
  const { num, request, clear } = ctrl

  return (
    <div className="uuid__entry form--inline">
      <label className="label">
        <span className="label__text">Number:</span>
        <input
          className="text"
          size="3"
          maxlength="3"
          onchange={m.withAttr('value', num)}
          value={num()}
        />
      </label>
      <button
        className="button uuid__button"
        type="button"
        onclick={request}
      >Generate</button>
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
