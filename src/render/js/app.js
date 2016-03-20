import m, { mount } from 'mithril'

import store from './store'

import AppLayout from './components/AppLayout'

export function start(options={}) {
  const { target } = options

  mount(target, <AppLayout />)
}
