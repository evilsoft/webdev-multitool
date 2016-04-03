import m, { mount } from 'mithril'

import electron from 'electron'

const { ipcRenderer } = electron

ipcRenderer.on('navigate', function(sender, data) {
  console.log(data);
})

import store from './store'

import AppLayout from './components/AppLayout'

export function start(options={}) {
  const { target } = options

  mount(target, <AppLayout />)
}
