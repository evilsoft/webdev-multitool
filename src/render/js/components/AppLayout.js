import m from 'mithril'

import {
  clipboard,
  ipcRenderer
} from 'electron'

import { connect } from 'store'

import GenerateUuid from './GenerateUuid'

import sendToChannel  from 'shared/sendToChannel'

const copyText = x => clipboard.writeText(x)
const sendTask = sendToChannel(ipcRenderer, 'task')

function view(ctrl, attrs) {
  return (
    <div>
      <GenerateUuid
        copyText={copyText}
        sendTask={sendTask}
        {...attrs } />
    </div>
  )
}

const AppLayout = connect({ view })

export default AppLayout
