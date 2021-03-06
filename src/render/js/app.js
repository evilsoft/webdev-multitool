import m, { mount } from 'mithril'
import electron     from 'electron'

import store        from 'store'
import { addUuid }  from 'actions/uuid'

import AppLayout from './components/AppLayout'

const { ipcRenderer } = electron

ipcRenderer.on('uuid', (e, data) => {
  store.dispatch(addUuid(data))
})

export function start(options={}) {
  const { target } = options

  mount(target, <AppLayout />)
}
