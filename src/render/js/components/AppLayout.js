import m from 'mithril'

import {
  clipboard,
  ipcRenderer
} from 'electron'

import GenerateUuid from './GenerateUuid'

import sendToChannel  from 'shared/sendToChannel'

const copyText = x => clipboard.writeText(x)
const sendTask = sendToChannel(ipcRenderer, 'task')

function view(ctrl, attrs) {
  return (
    <div>
      <GenerateUuid copyText={copyText} sendTask={sendTask} />
    </div>
  )
}

const AppLayout = { view }

export default AppLayout
