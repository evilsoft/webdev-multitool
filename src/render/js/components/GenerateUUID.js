import m from 'mithril'
import { ipcRenderer } from 'electron'

import sendToChannel from '../../../lib/sendToChannel'

import UuidItem from './UuidItem'

const sendTask    = sendToChannel(ipcRenderer, 'task')
const requestUUID = fn => prop => () => fn({ type: 'uuid', num: prop() })


function controller(attrs) {
  const num     = m.prop('')
  const request = requestUUID(sendTask)(num)

  return { num, request }
}

function view(ctrl, attrs) {
  const { num, request } = ctrl
  const { uuids } = attrs
  const results = uuids || []

  return (
    <div className="workspace">
      <div className="uuid">
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
        </div>
        <ul className="uuid__results">
          {results.map(uuid => <UuidItem uuid={uuid} />)}
        </ul>
      </div>
    </div>
  )
}

const GenerateUUID = { view, controller }

export default GenerateUUID