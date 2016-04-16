import m, { mount } from 'mithril'
import electron     from 'electron'

import store        from './store'
import { navigate, addUuid } from './actions'

import AppLayout from './components/AppLayout'

const { ipcRenderer } = electron

ipcRenderer.on('navigate', function(sender, data) {
  store.dispatch(navigate(data))
  m.redraw()
})

ipcRenderer.on('uuid', (e, data) => {
  store.dispatch(addUuid(data))
  m.redraw()
})

export function start(options={}) {
  const { target } = options

  mount(target, <AppLayout />)
}
